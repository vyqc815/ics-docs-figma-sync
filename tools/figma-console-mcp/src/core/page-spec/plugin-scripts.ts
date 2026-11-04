/**
 * Plugin-side scripts for figma_export_page_spec.
 *
 * These run inside the Desktop Bridge plugin through the existing EXECUTE_CODE
 * command, so the page-spec export works with any installed Bridge version —
 * no plugin update needed. Each script returns a JSON string (figma.mixed is a
 * Symbol and cannot cross postMessage, so everything is serialized in-plugin).
 *
 * Keep the script bodies free of backticks, and use "${" only for the module
 * constants below — the bodies are template literals; runtime parameters are
 * injected by replacing __PARAMS__.
 */

/** sharedPluginData namespace read from every node (hidden from all viewers). */
export const PAGE_SPEC_NAMESPACE = "figma_console";
/** sharedPluginData key holding a node's JSON spec overrides. */
export const PAGE_SPEC_KEY = "spec";

export interface ExtractParams {
	nodeId?: string;
	includeHidden: boolean;
	detectIcons: boolean;
	respectExportSettings: boolean;
}

export type AssetJob =
	| {
			id: string;
			kind: "image";
			imageHash: string;
			nodeIds: string[];
			name: string;
	  }
	| {
			id: string;
			kind: "svg" | "png";
			nodeId: string;
			nodeIds: string[];
			name: string;
			scale: number;
	  };

const EXTRACT_SCRIPT = `
var P = __PARAMS__;
var NS = '${PAGE_SPEC_NAMESPACE}';
var KEY = '${PAGE_SPEC_KEY}';
var MIXED = figma.mixed;
var root = P.nodeId ? await figma.getNodeByIdAsync(P.nodeId) : (figma.currentPage.selection[0] || null);
if (!root) throw new Error(P.nodeId ? 'Node not found: ' + P.nodeId : 'Nothing is selected. Select the page frame in Figma or pass nodeId.');
if (!('absoluteTransform' in root)) throw new Error('Node ' + root.id + ' (' + root.type + ') is not a layer that can be exported.');

var varIds = {};
var styleIds = {};
var assets = [];
var assetByKey = {};
var warnings = [];
var nodeCount = 0;
var VECTORISH = { VECTOR: 1, BOOLEAN_OPERATION: 1, STAR: 1, POLYGON: 1, LINE: 1 };
var CONTAINERS = { FRAME: 1, GROUP: 1, INSTANCE: 1, COMPONENT: 1 };

var PROPS = [
  'layoutMode', 'layoutWrap', 'primaryAxisSizingMode', 'counterAxisSizingMode',
  'layoutSizingHorizontal', 'layoutSizingVertical', 'primaryAxisAlignItems', 'counterAxisAlignItems',
  'counterAxisAlignContent', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
  'itemSpacing', 'counterAxisSpacing', 'itemReverseZIndex', 'strokesIncludedInLayout',
  'layoutPositioning', 'layoutGrow', 'layoutAlign', 'constraints',
  'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'clipsContent',
  'gridRowCount', 'gridColumnCount', 'gridRowGap', 'gridColumnGap',
  'fills', 'strokes', 'strokeWeight', 'strokeTopWeight', 'strokeRightWeight', 'strokeBottomWeight', 'strokeLeftWeight',
  'strokeAlign', 'dashPattern', 'cornerRadius', 'topLeftRadius', 'topRightRadius', 'bottomRightRadius', 'bottomLeftRadius',
  'cornerSmoothing', 'effects', 'opacity', 'blendMode', 'isMask', 'maskType', 'arcData',
  'fillStyleId', 'strokeStyleId', 'effectStyleId', 'textStyleId', 'boundVariables',
  'characters', 'textAlignHorizontal', 'textAlignVertical', 'textAutoResize', 'textTruncation', 'maxLines',
  'paragraphSpacing', 'paragraphIndent', 'leadingTrim', 'componentProperties',
  'fontName', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textCase', 'textDecoration'
];
var SEGMENT_FIELDS = ['fontName', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'fills', 'textDecoration', 'textCase', 'textStyleId', 'fillStyleId', 'hyperlink', 'listOptions', 'indentation', 'boundVariables'];
var SEGMENT_FIELDS_BASIC = ['fontName', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'fills', 'textDecoration', 'textCase', 'textStyleId', 'fillStyleId'];

function clean(v) {
  return JSON.parse(JSON.stringify(v, function (k, x) { return typeof x === 'symbol' ? 'MIXED' : x; }));
}
function noteVars(bv) {
  if (!bv || bv === MIXED) return;
  for (var k in bv) {
    var b = bv[k];
    var arr = Array.isArray(b) ? b : [b];
    for (var i = 0; i < arr.length; i++) if (arr[i] && arr[i].id) varIds[arr[i].id] = 1;
  }
}
function notePaints(paints) {
  if (!paints || paints === MIXED) return;
  for (var i = 0; i < paints.length; i++) if (paints[i].boundVariables) noteVars(paints[i].boundVariables);
}
function noteStyle(id) { if (typeof id === 'string' && id) styleIds[id] = 1; }
function hasImageFill(n) {
  try {
    if (!n.fills || n.fills === MIXED) return false;
    for (var i = 0; i < n.fills.length; i++) if (n.fills[i].type === 'IMAGE' || n.fills[i].type === 'VIDEO') return true;
  } catch (e) {}
  return false;
}
function isPartialEllipse(n) {
  if (n.type !== 'ELLIPSE' || !n.arcData) return false;
  var a = n.arcData;
  return a.innerRadius > 0 || Math.abs((a.endingAngle - a.startingAngle) - Math.PI * 2) > 0.0001;
}
// Gradient/image strokes have no CSS equivalent: export such leaf shapes as SVG.
function hasComplexStroke(n) {
  try {
    if (!n.strokes || n.strokes === MIXED) return false;
    for (var i = 0; i < n.strokes.length; i++) if (n.strokes[i].visible !== false && n.strokes[i].type !== 'SOLID') return true;
  } catch (e) {}
  return false;
}
function isVectorish(n) {
  if (VECTORISH[n.type] || isPartialEllipse(n)) return true;
  return (n.type === 'ELLIPSE' || n.type === 'RECTANGLE') && !hasImageFill(n) && hasComplexStroke(n);
}
function isIconLike(n) {
  if (isVectorish(n)) return true;
  if (!CONTAINERS[n.type] || !('children' in n) || n.children.length === 0) return false;
  var hasVector = false;
  var ok = true;
  function scan(c) {
    for (var i = 0; i < c.children.length && ok; i++) {
      var ch = c.children[i];
      if (!ch.visible) continue;
      if (ch.type === 'TEXT' || hasImageFill(ch)) { ok = false; return; }
      if (isVectorish(ch)) hasVector = true;
      else if (ch.type === 'RECTANGLE' || ch.type === 'ELLIPSE') {}
      else if ('children' in ch) scan(ch);
      else { ok = false; return; }
    }
  }
  scan(n);
  return ok && hasVector;
}
function addAsset(key, job) {
  if (assetByKey[key]) {
    var existing = assetByKey[key];
    for (var i = 0; i < job.nodeIds.length; i++) if (existing.nodeIds.indexOf(job.nodeIds[i]) < 0) existing.nodeIds.push(job.nodeIds[i]);
    return existing.id;
  }
  job.id = 'a' + (assets.length + 1);
  assets.push(job);
  assetByKey[key] = job;
  return job.id;
}
function readMeta(n) {
  try {
    var raw = n.getSharedPluginData(NS, KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); }
    catch (e) {
      warnings.push({ nodeId: n.id, nodeName: n.name, code: 'META_INVALID_JSON', message: 'sharedPluginData ' + NS + '/' + KEY + ' is not valid JSON; kept as raw text.' });
      return { raw: raw };
    }
  } catch (e) { return null; }
}

async function walk(n) {
  if (!n.visible && !P.includeHidden) return null;
  nodeCount++;
  var d = { id: n.id, name: n.name, type: n.type };
  if (!n.visible) d.hidden = true;
  var t = n.absoluteTransform;
  d.transform = [[t[0][0], t[0][1], t[0][2]], [t[1][0], t[1][1], t[1][2]]];
  d.width = n.width;
  d.height = n.height;
  try { if (n.rotation) d.rotation = n.rotation; } catch (e) {}

  for (var i = 0; i < PROPS.length; i++) {
    var p = PROPS[i];
    if (!(p in n)) continue;
    try {
      var v = n[p];
      if (v === undefined || v === null) continue;
      d[p] = v;
    } catch (e) {}
  }
  noteVars(d.boundVariables);
  notePaints(d.fills);
  notePaints(d.strokes);
  if (d.effects && d.effects !== MIXED) for (var ei = 0; ei < d.effects.length; ei++) if (d.effects[ei].boundVariables) noteVars(d.effects[ei].boundVariables);
  noteStyle(d.fillStyleId); noteStyle(d.strokeStyleId); noteStyle(d.effectStyleId); noteStyle(d.textStyleId);

  if (n.type === 'TEXT') {
    var segs = null;
    try { segs = n.getStyledTextSegments(SEGMENT_FIELDS); }
    catch (e) { try { segs = n.getStyledTextSegments(SEGMENT_FIELDS_BASIC); } catch (e2) {} }
    if (segs) {
      d.segments = segs;
      for (var si = 0; si < segs.length; si++) {
        notePaints(segs[si].fills);
        noteVars(segs[si].boundVariables);
        noteStyle(segs[si].textStyleId);
        noteStyle(segs[si].fillStyleId);
      }
    }
  }

  if (n.type === 'INSTANCE') {
    try {
      var mc = await n.getMainComponentAsync();
      if (mc) {
        d.mainComponent = { id: mc.id, name: mc.name, key: mc.key || null, remote: !!mc.remote };
        if (mc.parent && mc.parent.type === 'COMPONENT_SET') {
          d.mainComponent.componentSetName = mc.parent.name;
          d.mainComponent.componentSetKey = mc.parent.key || null;
        }
      }
    } catch (e) {}
  }

  try {
    if (n.annotations && n.annotations.length) {
      d.annotations = n.annotations.map(function (a) {
        return { label: a.labelMarkdown || a.label || '', categoryId: a.categoryId || null, properties: a.properties || [] };
      });
    }
  } catch (e) {}

  try {
    if (n.reactions && n.reactions.length) {
      d.reactions = n.reactions.map(function (r) {
        var acts = r.actions || (r.action ? [r.action] : []);
        return {
          trigger: r.trigger,
          actions: acts.map(function (a) {
            var o = { type: a.type };
            if (a.destinationId) o.destinationId = a.destinationId;
            if (a.navigation) o.navigation = a.navigation;
            if (a.url) o.url = a.url;
            if (a.transition) o.transition = a.transition;
            return o;
          })
        };
      });
    }
  } catch (e) {}

  var meta = readMeta(n);
  if (meta) d.meta = meta;

  // Leaf export: icons/illustrations become a single SVG/PNG asset.
  var exportMode = meta && meta.export;
  var leaf = null;
  if (n !== root && exportMode !== 'none') {
    if (exportMode === 'svg' || exportMode === 'png') leaf = exportMode;
    else if (P.respectExportSettings && n.exportSettings && n.exportSettings.length) leaf = n.exportSettings[0].format === 'SVG' ? 'svg' : 'png';
    else if (P.detectIcons && isIconLike(n)) leaf = 'svg';
  }
  if (leaf) {
    // The exported file already contains any rotation/flip: describe the leaf by its
    // axis-aligned bounding box, which is also what auto layout positions.
    var ox = t[0][2], oy = t[1][2];
    if (t[0][0] !== 1 || t[0][1] !== 0 || t[1][0] !== 0 || t[1][1] !== 1) {
      try {
        var bb = n.absoluteBoundingBox;
        if (bb) {
          ox = bb.x; oy = bb.y;
          d.transform = [[1, 0, bb.x], [0, 1, bb.y]];
          d.width = bb.width;
          d.height = bb.height;
          delete d.rotation;
        }
      } catch (e) {}
    }
    try {
      var rb = n.absoluteRenderBounds;
      if (rb) d.renderBounds = { x: rb.x - ox, y: rb.y - oy, width: rb.width, height: rb.height };
    } catch (e) {}
    d.asset = addAsset('node:' + n.id + ':' + leaf, { kind: leaf, nodeId: n.id, nodeIds: [n.id], name: n.name, scale: (meta && meta.scale) || 2 });
    if ('children' in n) d.childCount = n.children.length;
    return d;
  }

  if (d.fills && d.fills !== MIXED) {
    for (var fi = 0; fi < d.fills.length; fi++) {
      var f = d.fills[fi];
      if (f.type === 'IMAGE' && f.imageHash) {
        var copy = clean(f);
        copy.assetId = addAsset('image:' + f.imageHash, { kind: 'image', imageHash: f.imageHash, nodeIds: [n.id], name: n.name });
        d.fills = d.fills.slice();
        d.fills[fi] = copy;
      } else if (f.type === 'VIDEO') {
        warnings.push({ nodeId: n.id, nodeName: n.name, code: 'VIDEO_FILL', message: 'Video fills cannot be exported by the Plugin API; add the video file manually.' });
      }
    }
  }

  if ('children' in n) {
    d.children = [];
    for (var ci = 0; ci < n.children.length; ci++) {
      try {
        var child = await walk(n.children[ci]);
        if (child) d.children.push(child);
      } catch (e) {
        warnings.push({ nodeId: n.children[ci].id, nodeName: n.children[ci].name, code: 'CHILD_UNREADABLE', message: String(e && e.message || e) });
      }
    }
  }
  return d;
}

var tree = clean(await walk(root));

async function modeFor(collection) {
  // A frame usually inherits its mode from a parent section, and resolvedVariableModes
  // leaves out collections its layers do not use yet: look up the parents as well.
  try {
    var resolved = root.resolvedVariableModes && root.resolvedVariableModes[collection.id];
    if (resolved) return resolved;
    for (var a = root; a && a.type !== 'DOCUMENT'; a = a.parent) {
      var explicit = a.explicitVariableModes && a.explicitVariableModes[collection.id];
      if (explicit) return explicit;
    }
  } catch (e) {}
  return collection.defaultModeId;
}
async function resolveValue(v, depth) {
  var col = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
  var modeId = col ? await modeFor(col) : null;
  var val = modeId && v.valuesByMode[modeId] !== undefined ? v.valuesByMode[modeId] : v.valuesByMode[Object.keys(v.valuesByMode)[0]];
  if (val && val.type === 'VARIABLE_ALIAS' && depth < 10) {
    var target = await figma.variables.getVariableByIdAsync(val.id);
    if (target) {
      var r = await resolveValue(target, depth + 1);
      return { value: r.value, aliasOf: [target.name].concat(r.aliasOf) };
    }
  }
  return { value: val, aliasOf: [] };
}

var variables = [];
for (var vid in varIds) {
  try {
    var vv = await figma.variables.getVariableByIdAsync(vid);
    if (!vv) continue;
    var vcol = await figma.variables.getVariableCollectionByIdAsync(vv.variableCollectionId);
    var vmode = vcol ? await modeFor(vcol) : null;
    var modeName = null;
    if (vcol) for (var mi = 0; mi < vcol.modes.length; mi++) if (vcol.modes[mi].modeId === vmode) modeName = vcol.modes[mi].name;
    var res = await resolveValue(vv, 0);
    variables.push({
      id: vid, name: vv.name, collection: vcol ? vcol.name : null, mode: modeName,
      resolvedType: vv.resolvedType, value: res.value, aliasOf: res.aliasOf,
      codeSyntax: vv.codeSyntax || {}, remote: !!vv.remote
    });
  } catch (e) {}
}

var styles = [];
for (var sid in styleIds) {
  try {
    var st = await figma.getStyleByIdAsync(sid);
    if (st) styles.push({ id: sid, name: st.name, type: st.type, description: st.description || '' });
  } catch (e) {}
}

var page = root;
while (page && page.type !== 'PAGE') page = page.parent;

return JSON.stringify(clean({
  file: { fileKey: figma.fileKey || null, fileName: figma.root.name, pageName: page ? page.name : null },
  tree: tree,
  variables: variables,
  styles: styles,
  assets: assets,
  warnings: warnings,
  nodeCount: nodeCount
}));
`;

const ASSET_SCRIPT = `
var J = __PARAMS__;
if (J.kind === 'image') {
  var img = figma.getImageByHash(J.imageHash);
  if (!img) throw new Error('Image not found for hash ' + J.imageHash);
  var bytes = await img.getBytesAsync();
  var size = await img.getSizeAsync();
  return JSON.stringify({ base64: figma.base64Encode(bytes), width: size.width, height: size.height });
}
var node = await figma.getNodeByIdAsync(J.nodeId);
if (!node) throw new Error('Node not found: ' + J.nodeId);
// Exports cover the rendered bounds (shadows, clipping by the parent), not the layer box.
var bounds = node.absoluteRenderBounds || { width: node.width, height: node.height };
if (J.kind === 'svg') {
  var svg = await node.exportAsync({ format: 'SVG_STRING', svgOutlineText: true, svgIdAttribute: false });
  return JSON.stringify({ text: svg, width: bounds.width, height: bounds.height });
}
// The page reference is the frame itself: content hanging past its edges is cut,
// as the page box cuts it. Icons keep their full render bounds.
if (J.frameBounds) bounds = { width: node.width, height: node.height };
var png = await node.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: J.scale }, useAbsoluteBounds: !!J.frameBounds });
return JSON.stringify({ base64: figma.base64Encode(png), width: bounds.width, height: bounds.height });
`;

function inject(script: string, params: unknown): string {
	// Function replacer: "$" sequences in the JSON must not be read as patterns.
	return script.replace("__PARAMS__", () => JSON.stringify(params));
}

export function buildExtractScript(params: ExtractParams): string {
	return inject(EXTRACT_SCRIPT, params);
}

export function buildAssetScript(job: AssetJob): string {
	return inject(ASSET_SCRIPT, job);
}

/** Reference render of the whole frame, used later for pixel-diff checks. */
export function buildReferenceScript(nodeId: string, scale: number): string {
	return inject(ASSET_SCRIPT, {
		kind: "png",
		nodeId,
		scale,
		frameBounds: true,
	});
}

const DISCOVER_SCRIPT = `
var D = __PARAMS__;
var pages = [figma.currentPage];
if (D.allPages) pages = figma.root.children.slice();
else if (D.pageName) {
  pages = [];
  for (var i = 0; i < figma.root.children.length; i++) {
    if (figma.root.children[i].name.trim() === D.pageName.trim()) pages.push(figma.root.children[i]);
  }
  if (!pages.length) throw new Error('Figma page not found: ' + D.pageName);
}
var out = [];
function visit(n, pageName) {
  if (n.type === 'FRAME' && n.width >= D.minWidth && n.height >= D.minHeight) {
    out.push({ id: n.id, name: n.name, page: pageName, width: Math.round(n.width), height: Math.round(n.height) });
    return;
  }
  if (n.type === 'SECTION' || n.type === 'GROUP') for (var c = 0; c < n.children.length; c++) visit(n.children[c], pageName);
}
for (var p = 0; p < pages.length; p++) {
  await pages[p].loadAsync();
  for (var k = 0; k < pages[p].children.length; k++) visit(pages[p].children[k], pages[p].name.trim());
}
return JSON.stringify({ page: D.allPages ? 'all ' + pages.length + ' pages' : pages[0].name, fileKey: figma.fileKey || null, frames: out });
`;

/** Page-sized frames on a Figma page (top level, or inside sections and groups). */
export function buildDiscoverScript(params: {
	pageName?: string;
	/** Every page of the file instead of one. */
	allPages?: boolean;
	minWidth: number;
	minHeight: number;
}): string {
	return inject(DISCOVER_SCRIPT, params);
}
