// Copied from figma-console-mcp-pls dist/core/page-spec/changes.js (branch feat/screen-registry). Do not edit here.
/**
 * What changed on the registered screens since the last snapshot.
 *
 * Reads the frames through the Figma REST API, so neither Figma Desktop nor the
 * Bridge plugin has to be open. A snapshot keeps one short line per layer, keyed
 * by node id; comparing two snapshots gives the report for design and QC.
 */
const hex = (c) => [c.r, c.g, c.b]
    .map((x) => Math.round(x * 255)
    .toString(16)
    .padStart(2, "0"))
    .join("");
function paintsKey(paints) {
    return (paints ?? [])
        .filter((p) => p.visible !== false)
        .map((p) => {
        const base = p.type === "SOLID" && p.color
            ? hex(p.color)
            : p.type === "IMAGE"
                ? `image:${p.imageRef ?? ""}`
                : p.type;
        return p.opacity !== undefined && p.opacity < 1
            ? `${base}@${p.opacity.toFixed(2)}`
            : base;
    })
        .join("+");
}
function styleKey(n) {
    const parts = [`fill=${paintsKey(n.fills)}`, `stroke=${paintsKey(n.strokes)}`];
    if (n.strokes?.length && n.strokeWeight)
        parts.push(`sw=${n.strokeWeight}`);
    if (n.cornerRadius)
        parts.push(`r=${n.cornerRadius}`);
    if (n.opacity !== undefined && n.opacity < 1)
        parts.push(`o=${n.opacity.toFixed(2)}`);
    if (n.effects?.length)
        parts.push(`fx=${n.effects.length}`);
    if (n.style)
        parts.push(`font=${n.style.fontPostScriptName ?? n.style.fontFamily}/${n.style.fontSize}/${n.style.lineHeightPx}`);
    return parts.join(" ");
}
/** One short line per visible layer of a frame. */
export function summarizeFrame(root) {
    const origin = root.absoluteBoundingBox;
    const layers = {};
    const walk = (n) => {
        if (n.visible === false)
            return;
        const b = n.absoluteBoundingBox;
        const entry = { name: n.name, type: n.type };
        if (b && origin)
            entry.box = [
                Math.round(b.x - origin.x),
                Math.round(b.y - origin.y),
                Math.round(b.width),
                Math.round(b.height),
            ];
        if (n.characters !== undefined)
            entry.text = n.characters;
        if (n.componentId)
            entry.component = n.componentId;
        const style = styleKey(n);
        if (style)
            entry.style = style;
        layers[n.id] = entry;
        for (const c of n.children ?? [])
            walk(c);
    };
    walk(root);
    return { nodeId: root.id, frameName: root.name, layers };
}
/** Layer-level differences between two snapshots of one frame. */
export function diffFrame(before, after) {
    const out = [];
    for (const [id, a] of Object.entries(after.layers)) {
        const b = before.layers[id];
        if (!b) {
            out.push({ kind: "added", nodeId: id, name: a.name, after: a.text });
            continue;
        }
        const add = (kind, x, y) => {
            if (x !== y)
                out.push({ kind, nodeId: id, name: a.name, before: x, after: y });
        };
        add("text", b.text, a.text);
        add("component", b.component, a.component);
        add("style", b.style, a.style);
        add("layout", b.box?.join(","), a.box?.join(","));
        add("renamed", b.name, a.name);
    }
    for (const [id, b] of Object.entries(before.layers))
        if (!after.layers[id])
            out.push({ kind: "removed", nodeId: id, name: b.name, before: b.text });
    return out;
}
export function diffSnapshots(before, after) {
    const out = [];
    for (const [page, frame] of Object.entries(after.pages)) {
        const prev = before.pages[page];
        if (!prev) {
            out.push({
                page,
                frameName: frame.frameName,
                status: "new",
                changes: [],
            });
            continue;
        }
        const changes = diffFrame(prev, frame);
        if (changes.length)
            out.push({
                page,
                frameName: frame.frameName,
                status: "changed",
                changes,
            });
    }
    for (const [page, frame] of Object.entries(before.pages))
        if (!after.pages[page])
            out.push({
                page,
                frameName: frame.frameName,
                status: "removed",
                changes: [],
            });
    return out;
}
const KIND_LABEL = {
    added: "Thêm",
    removed: "Xoá",
    text: "Đổi chữ",
    component: "Đổi component",
    style: "Đổi style",
    layout: "Đổi vị trí, kích thước",
    renamed: "Đổi tên layer",
};
/** Report for design and QC. Moves caused by a bigger change are summed, not listed. */
export function changesMarkdown(changes, maxPerPage = 12, 
/** Screens compared; screens left out of the report did not change. */
total) {
    if (!changes.length)
        return "Không có màn nào đổi.\n";
    const lines = [
        `# Figma đổi ${changes.length}${total ? `/${total}` : ""} màn`,
        "",
    ];
    const quote = (s) => (s ? `“${s.replace(/\s+/g, " ").slice(0, 80)}”` : "—");
    for (const p of changes) {
        lines.push(`## ${p.frameName}`, "");
        if (p.status !== "changed") {
            lines.push(p.status === "new" ? "Màn mới." : "Màn đã bị xoá.", "");
            continue;
        }
        const counts = new Map();
        for (const c of p.changes)
            counts.set(c.kind, (counts.get(c.kind) ?? 0) + 1);
        lines.push([...counts].map(([k, n]) => `${KIND_LABEL[k]}: ${n}`).join(" · "), "");
        const shown = p.changes
            .filter((c) => c.kind !== "layout" && c.kind !== "renamed")
            .slice(0, maxPerPage);
        for (const c of shown) {
            const detail = c.kind === "text"
                ? `${quote(c.before)} → ${quote(c.after)}`
                : c.kind === "style" || c.kind === "component"
                    ? ""
                    : quote(c.after ?? c.before);
            lines.push(`- ${KIND_LABEL[c.kind]} \`${c.name}\` ${detail}`.trimEnd());
        }
        lines.push("");
    }
    return `${lines.join("\n")}\n`;
}
/** Figma REST client with retry on rate limits. */
export function restClient(token, fetchFn = fetch, wait = (ms) => new Promise((r) => setTimeout(r, ms))) {
    return async (path) => {
        for (let attempt = 0;; attempt++) {
            const res = await fetchFn(`https://api.figma.com${path}`, {
                headers: { "X-Figma-Token": token },
            });
            if (res.ok)
                return res.json();
            if ((res.status === 429 || res.status >= 500) && attempt < 5) {
                const after = Number(res.headers.get("retry-after"));
                await wait(after > 0 ? after * 1000 : 2000 * 2 ** attempt);
                continue;
            }
            throw new Error(`Figma REST ${res.status} on ${path.split("?")[0]}`);
        }
    };
}
/** Reads the frames in small batches, so one big screen cannot time out the rest. */
export async function fetchSnapshot(get, fileKey, pages, onProgress, batchSize = 10) {
    const snapshot = { version: 1, pages: {} };
    const missing = [];
    for (let i = 0; i < pages.length; i += batchSize) {
        const batch = pages.slice(i, i + batchSize);
        const ids = encodeURIComponent(batch.map((p) => p.nodeId).join(","));
        const res = (await get(`/v1/files/${fileKey}/nodes?ids=${ids}`));
        snapshot.fileVersion = res.version ?? snapshot.fileVersion;
        snapshot.lastModified = res.lastModified ?? snapshot.lastModified;
        for (const p of batch) {
            const doc = res.nodes[p.nodeId]?.document;
            if (doc)
                snapshot.pages[p.name] = summarizeFrame(doc);
            else
                missing.push(p.name);
        }
        onProgress?.(Math.min(i + batchSize, pages.length), pages.length);
    }
    return { snapshot, missing };
}
