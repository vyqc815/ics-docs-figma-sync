/**
 * Minimal PNG codec (no dependencies; node:zlib only).
 *
 * Enough for the fidelity check: decodes the non-interlaced PNGs Figma and
 * Chrome produce (gray, RGB, palette, gray+alpha, RGBA; 1–16 bit) to RGBA8,
 * and encodes RGBA8 images for the diff output.
 */

import { deflateSync, inflateSync } from "node:zlib";

export interface RgbaImage {
	width: number;
	height: number;
	/** RGBA, 4 bytes per pixel, row-major. */
	data: Uint8Array;
}

const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const CRC_TABLE = (() => {
	const t = new Uint32Array(256);
	for (let n = 0; n < 256; n++) {
		let c = n;
		for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
		t[n] = c >>> 0;
	}
	return t;
})();

function crc32(buf: Uint8Array): number {
	let c = 0xffffffff;
	for (let i = 0; i < buf.length; i++)
		c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
	return (c ^ 0xffffffff) >>> 0;
}

const CHANNELS: Record<number, number> = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 };

function paeth(a: number, b: number, c: number): number {
	const p = a + b - c;
	const pa = Math.abs(p - a);
	const pb = Math.abs(p - b);
	const pc = Math.abs(p - c);
	return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}

export function decodePng(input: Uint8Array): RgbaImage {
	const buf = Buffer.from(input.buffer, input.byteOffset, input.byteLength);
	if (buf.length < 8 || !buf.subarray(0, 8).equals(SIGNATURE))
		throw new Error("Not a PNG file");
	let width = 0;
	let height = 0;
	let depth = 0;
	let colorType = 0;
	let palette: Buffer | null = null;
	let trns: Buffer | null = null;
	const idat: Buffer[] = [];
	let off = 8;
	while (off + 8 <= buf.length) {
		const len = buf.readUInt32BE(off);
		const type = buf.toString("latin1", off + 4, off + 8);
		const body = buf.subarray(off + 8, off + 8 + len);
		off += 12 + len;
		if (type === "IHDR") {
			width = body.readUInt32BE(0);
			height = body.readUInt32BE(4);
			depth = body[8];
			colorType = body[9];
			if (body[12] !== 0) throw new Error("Interlaced PNGs are not supported");
		} else if (type === "PLTE") palette = body;
		else if (type === "tRNS") trns = body;
		else if (type === "IDAT") idat.push(body);
		else if (type === "IEND") break;
	}
	const channels = CHANNELS[colorType];
	if (!channels || !width || !height)
		throw new Error(`Unsupported PNG (color type ${colorType})`);
	const bitsPerPixel = channels * depth;
	const bpp = Math.max(1, bitsPerPixel >> 3);
	const stride = Math.ceil((width * bitsPerPixel) / 8);
	const raw = inflateSync(Buffer.concat(idat));
	const rows = Buffer.alloc(stride * height);
	let prev = Buffer.alloc(stride);
	for (let y = 0; y < height; y++) {
		const filter = raw[y * (stride + 1)];
		const line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
		const out = rows.subarray(y * stride, (y + 1) * stride);
		for (let x = 0; x < stride; x++) {
			const a = x >= bpp ? out[x - bpp] : 0;
			const b = prev[x];
			const c = x >= bpp ? prev[x - bpp] : 0;
			const v = line[x];
			out[x] =
				(filter === 0
					? v
					: filter === 1
						? v + a
						: filter === 2
							? v + b
							: filter === 3
								? v + ((a + b) >> 1)
								: v + paeth(a, b, c)) & 0xff;
		}
		prev = out;
	}

	const data = new Uint8Array(width * height * 4);
	const maxV = (1 << depth) - 1;
	const sample = (row: Buffer, i: number): number => {
		// i-th sample of the row, scaled to 0–255.
		if (depth === 8) return row[i];
		if (depth === 16) return row[i * 2];
		const bit = i * depth;
		const v = (row[bit >> 3] >> (8 - depth - (bit & 7))) & maxV;
		return colorType === 3 ? v : Math.round((v * 255) / maxV);
	};
	for (let y = 0; y < height; y++) {
		const row = rows.subarray(y * stride, (y + 1) * stride);
		for (let x = 0; x < width; x++) {
			const o = (y * width + x) * 4;
			if (colorType === 3) {
				const idx = sample(row, x);
				data[o] = palette?.[idx * 3] ?? 0;
				data[o + 1] = palette?.[idx * 3 + 1] ?? 0;
				data[o + 2] = palette?.[idx * 3 + 2] ?? 0;
				data[o + 3] = trns && idx < trns.length ? trns[idx] : 255;
			} else {
				const s = (k: number) => sample(row, x * channels + k);
				if (colorType === 0 || colorType === 4) {
					const g = s(0);
					data[o] = g;
					data[o + 1] = g;
					data[o + 2] = g;
					data[o + 3] = colorType === 4 ? s(1) : 255;
				} else {
					data[o] = s(0);
					data[o + 1] = s(1);
					data[o + 2] = s(2);
					data[o + 3] = colorType === 6 ? s(3) : 255;
				}
			}
		}
	}
	return { width, height, data };
}

function chunk(type: string, body: Buffer): Buffer {
	const head = Buffer.alloc(8);
	head.writeUInt32BE(body.length, 0);
	head.write(type, 4, "latin1");
	const crc = Buffer.alloc(4);
	crc.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), body])), 0);
	return Buffer.concat([head, body, crc]);
}

export function encodePng(img: RgbaImage): Buffer {
	const stride = img.width * 4;
	const raw = Buffer.alloc((stride + 1) * img.height);
	for (let y = 0; y < img.height; y++) {
		raw[y * (stride + 1)] = 0;
		Buffer.from(img.data.buffer, img.data.byteOffset + y * stride, stride).copy(
			raw,
			y * (stride + 1) + 1,
		);
	}
	const ihdr = Buffer.alloc(13);
	ihdr.writeUInt32BE(img.width, 0);
	ihdr.writeUInt32BE(img.height, 4);
	ihdr[8] = 8;
	ihdr[9] = 6;
	return Buffer.concat([
		SIGNATURE,
		chunk("IHDR", ihdr),
		chunk("IDAT", deflateSync(raw)),
		chunk("IEND", Buffer.alloc(0)),
	]);
}
