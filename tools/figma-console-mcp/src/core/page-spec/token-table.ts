/**
 * Token table for REST exports: variable id → name, collection, mode and value on light and dark screens.
 *
 * Figma's REST API gives variable ids on every bound property, but the variables themselves only to
 * Enterprise plans. Screens exported once through the plugin already carry the names (page-spec tokens,
 * per node and property, same order as the node's boundVariables). Reading the same screens through REST
 * pairs each id with its name, so the table is built from data already in the project: no plugin run.
 */
import type { FetchJson } from "./changes.js";
import { pluginBoundVariables, type TableVariable, type TokenTable } from "./rest-source.js";

// biome-ignore lint/suspicious/noExplicitAny: Figma REST JSON and page-spec trees
type Rn = Record<string, any>;

/** Alias ids of one boundVariables entry, in order: a single alias, or one per paint/effect. */
function aliasIds(v: unknown): (string | null)[] {
	const list = Array.isArray(v) ? v : [v];
	return list.map((b: Rn) => b?.id ?? b?.color?.id ?? null);
}

export interface TokenSource {
	nodeId: string;
	/** The plugin-exported page-spec.json of this screen. */
	spec: Rn;
	dark: boolean;
}

/**
 * Pairs REST variable ids with the names in plugin page specs. Returns the table and how many ids
 * were seen with two different names (should be 0).
 */
export async function buildTokenTable(
	get: FetchJson,
	fileKey: string,
	screens: TokenSource[],
	onProgress?: (done: number, total: number) => void,
	batchSize = 8,
): Promise<{ table: TokenTable; conflicts: number }> {
	const table: TokenTable = {};
	let conflicts = 0;
	for (let i = 0; i < screens.length; i += batchSize) {
		const batch = screens.slice(i, i + batchSize);
		const ids = encodeURIComponent(batch.map((s) => s.nodeId).join(","));
		const res = (await get(`/v1/files/${fileKey}/nodes?ids=${ids}`)) as Rn;
		for (const screen of batch) {
			const doc = res.nodes?.[screen.nodeId]?.document;
			if (!doc) continue;
			const byId = new Map<string, Rn>();
			const index = (n: Rn) => {
				byId.set(n.id, n);
				for (const c of n.children ?? []) index(c);
			};
			index(screen.spec.tree);
			const varByName = new Map<string, Rn>((screen.spec.tokens?.variables ?? []).map((v: Rn) => [v.name, v]));
			const pair = (id: string | null, name: string | undefined) => {
				if (!id || !name) return;
				const info = varByName.get(name);
				if (!info) return;
				const entry: TableVariable = table[id] ?? {
					name,
					collection: info.collection ?? null,
					resolvedType: info.type,
					codeSyntax: info.codeSyntax ?? {},
					remote: false,
					modes: {},
				};
				if (entry.name !== name) {
					conflicts++;
					return;
				}
				const bucket = screen.dark ? "dark" : "light";
				entry.modes[bucket] ??= { mode: info.mode ?? null, value: info.value, aliasOf: info.aliasOf ?? [] };
				table[id] = entry;
			};
			const walk = (n: Rn) => {
				const old = byId.get(n.id);
				if (old) {
					for (const [key, bound] of Object.entries(pluginBoundVariables(n.boundVariables) ?? {})) {
						const names = old.tokens?.[key];
						const list = Array.isArray(names) ? names : [names];
						aliasIds(bound).forEach((id, k) => pair(id, list[k]));
					}
					// text colours sit on the segments in the plugin spec
					const seg = old.text?.segments?.[0]?.tokens?.fills;
					if (seg && n.boundVariables?.fills) aliasIds(n.boundVariables.fills).forEach((id, k) => pair(id, seg[k]));
				}
				for (const c of n.children ?? []) walk(c);
			};
			walk(doc);
		}
		onProgress?.(Math.min(i + batchSize, screens.length), screens.length);
	}
	return { table, conflicts };
}
