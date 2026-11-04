/**
 * CSS declarations → Tailwind v4 classes.
 *
 * Every value is kept exactly: common properties become their utility with an
 * arbitrary value (`w-[1440px]`, `gap-[16px]`), keyword values their named
 * utility (`flex-col`, `items-center`), and everything else an arbitrary
 * property (`[box-shadow:inset_0_0_0_1px_#e2e8f0]`). Nothing is rounded to the
 * Tailwind scale, so the page renders exactly like the CSS Module version.
 */

type Css = Record<string, string>;

/** Arbitrary values: spaces become `_`, a literal `_` is escaped, double quotes become single. */
export function twValue(v: string): string {
	return v
		.trim()
		.replace(/_/g, "\\_")
		.replace(/"/g, "'")
		.replace(/\s*,\s*/g, ",")
		.replace(/\s+/g, "_");
}

const KEYWORDS: Record<string, Record<string, string>> = {
	display: {
		flex: "flex",
		"inline-flex": "inline-flex",
		block: "block",
		"inline-block": "inline-block",
		inline: "inline",
		grid: "grid",
		none: "hidden",
	},
	position: { absolute: "absolute", relative: "relative", fixed: "fixed" },
	"flex-direction": {
		row: "flex-row",
		column: "flex-col",
		"row-reverse": "flex-row-reverse",
		"column-reverse": "flex-col-reverse",
	},
	"flex-wrap": { wrap: "flex-wrap", nowrap: "flex-nowrap" },
	"justify-content": {
		"flex-start": "justify-start",
		center: "justify-center",
		"flex-end": "justify-end",
		"space-between": "justify-between",
	},
	"align-items": {
		"flex-start": "items-start",
		center: "items-center",
		"flex-end": "items-end",
		baseline: "items-baseline",
		stretch: "items-stretch",
	},
	"align-self": {
		"flex-start": "self-start",
		center: "self-center",
		"flex-end": "self-end",
		stretch: "self-stretch",
		auto: "self-auto",
	},
	"align-content": {
		"flex-start": "content-start",
		center: "content-center",
		"flex-end": "content-end",
		"space-between": "content-between",
	},
	overflow: { hidden: "overflow-hidden", visible: "overflow-visible" },
	"white-space": {
		pre: "whitespace-pre",
		"pre-wrap": "whitespace-pre-wrap",
		nowrap: "whitespace-nowrap",
		normal: "whitespace-normal",
	},
	"text-align": {
		left: "text-left",
		center: "text-center",
		right: "text-right",
		justify: "text-justify",
	},
	"font-style": { italic: "italic", normal: "not-italic" },
	"text-transform": {
		uppercase: "uppercase",
		lowercase: "lowercase",
		capitalize: "capitalize",
		none: "normal-case",
	},
	"text-decoration": { none: "no-underline", underline: "underline" },
	"box-sizing": { "border-box": "box-border" },
	"flex-shrink": { "0": "shrink-0", "1": "shrink" },
	"flex-grow": { "0": "grow-0", "1": "grow" },
	"font-weight": {
		"100": "font-thin",
		"200": "font-extralight",
		"300": "font-light",
		"400": "font-normal",
		"500": "font-medium",
		"600": "font-semibold",
		"700": "font-bold",
		"800": "font-extrabold",
		"900": "font-black",
	},
	margin: { "0": "m-0" },
	"max-width": { none: "max-w-none" },
};

/** Properties with a utility that takes any length/number as `prefix-[value]`. */
const LENGTHS: Record<string, string> = {
	width: "w",
	height: "h",
	"min-width": "min-w",
	"min-height": "min-h",
	"max-width": "max-w",
	"max-height": "max-h",
	left: "left",
	top: "top",
	right: "right",
	bottom: "bottom",
	gap: "gap",
	"row-gap": "gap-y",
	"column-gap": "gap-x",
	padding: "p",
	margin: "m",
	"margin-bottom": "mb",
	"border-radius": "rounded",
	"font-size": "text",
	"line-height": "leading",
	"letter-spacing": "tracking",
	opacity: "opacity",
	flex: "flex",
	"z-index": "z",
};

/** Color properties take a type hint so a `var(…)` value is not read as something else. */
const COLORS: Record<string, string> = {
	"background-color": "bg",
	color: "text",
};

export function cssToTailwind(css: Css): string {
	const out: string[] = [];
	for (const [prop, raw] of Object.entries(css)) {
		const value = raw.trim();
		const keyword = KEYWORDS[prop]?.[value];
		if (keyword) out.push(keyword);
		else if (LENGTHS[prop] && !/\s/.test(value) && !value.startsWith("var("))
			out.push(`${LENGTHS[prop]}-[${twValue(value)}]`);
		else if (COLORS[prop])
			out.push(`${COLORS[prop]}-[color:${twValue(value)}]`);
		else out.push(`[${prop}:${twValue(value)}]`);
	}
	return out.join(" ");
}
