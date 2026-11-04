import { pluginBoundVariables, restExtract } from "../src/core/page-spec/rest-source";

const frame = {
	id: "1:1",
	name: "CD-KH-010000-DK — Test",
	type: "FRAME",
	absoluteBoundingBox: { x: 100, y: 200, width: 400, height: 300 },
	size: { x: 400, y: 300 },
	layoutMode: "VERTICAL",
	individualStrokeWeights: { top: 0, right: 0, bottom: 1, left: 0 },
	strokeWeight: 1,
	strokes: [{ type: "SOLID", color: { r: 1, g: 0, b: 0, a: 1 } }],
	fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0, a: 0.5 }, boundVariables: { color: { type: "VARIABLE_ALIAS", id: "VariableID:1" } } }],
	boundVariables: { rectangleCornerRadii: { RECTANGLE_TOP_LEFT_CORNER_RADIUS: { type: "VARIABLE_ALIAS", id: "VariableID:2" } } },
	children: [
		{
			id: "1:2",
			name: "Label",
			type: "TEXT",
			size: { x: 50, y: 20 },
			relativeTransform: [[1, 0, 10], [0, 1, 5]],
			characters: "AbC",
			characterStyleOverrides: [0, 3, 3],
			styleOverrideTable: { 3: { fontWeight: 700, fontStyle: "Bold" } },
			style: { fontFamily: "Inter", fontStyle: "Regular", fontWeight: 400, fontSize: 14, lineHeightUnit: "PIXELS", lineHeightPx: 20, letterSpacing: 0 },
			fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0, a: 1 } }],
			interactions: [{ trigger: { type: "ON_CLICK" }, actions: [{ type: "NODE", destinationId: null, navigation: "NAVIGATE", transition: null }] }],
			transitionNodeID: "9:9",
		},
	],
};

const get = async () => ({ name: "File", nodes: { "1:1": { document: frame, components: {}, componentSets: {}, styles: {} } } });

describe("restExtract", () => {
	it("returns the plugin's raw shape", async () => {
		const raw = await restExtract(get, {
			fileKey: "K",
			tokens: {
				"VariableID:1": { name: "bg/x", collection: "C", resolvedType: "COLOR", codeSyntax: {}, remote: false, modes: { light: { mode: "Light", value: "#000", aliasOf: [] }, dark: { mode: "Dark", value: "#111", aliasOf: [] } } },
			},
		}, { nodeId: "1:1", includeHidden: false, detectIcons: true, respectExportSettings: false });
		const t = raw.tree;
		expect(t.transform).toEqual([[1, 0, 100], [0, 1, 200]]);
		expect(t.strokeWeight).toBe("MIXED");
		expect(t.strokeBottomWeight).toBe(1);
		expect(t.fills[0]).toMatchObject({ color: { r: 0, g: 0, b: 0 }, opacity: 0.5 });
		expect(t.boundVariables.topLeftRadius.id).toBe("VariableID:2");
		const text = t.children[0];
		expect(text.transform).toEqual([[1, 0, 110], [0, 1, 205]]);
		expect(text.segments.map((s: { characters: string; fontName: { style: string } }) => [s.characters, s.fontName.style])).toEqual([["A", "Regular"], ["bC", "Bold"]]);
		expect(text.fontWeight).toBe("MIXED");
		expect(text.lineHeight).toEqual({ unit: "PIXELS", value: 20 });
		expect(text.reactions[0].actions[0]).toEqual({ type: "NODE", destinationId: "9:9", navigation: "NAVIGATE" });
		// -DK screen: the dark mode of the variable; unknown ids are reported
		expect(raw.variables).toEqual([expect.objectContaining({ name: "bg/x", mode: "Dark", value: "#111" })]);
		expect(raw.warnings.map((w) => w.code)).toContain("TOKEN_UNKNOWN");
	});
});

describe("pluginBoundVariables", () => {
	it("maps REST corner radii to the plugin's keys", () => {
		expect(pluginBoundVariables({ rectangleCornerRadii: { RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: { id: "v" } }, itemSpacing: { id: "s" } })).toEqual({
			bottomLeftRadius: { id: "v" },
			itemSpacing: { id: "s" },
		});
	});
});
