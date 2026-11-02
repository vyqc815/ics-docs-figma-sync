// ICS Code Viewer: shows the Markdown spec and generated code of the selected screen.
// The panel asks the app for the screen by id; the selection and every ancestor are sent
// (innermost first), so selecting any layer inside a screen works. Selecting a code note
// shows the screen the note belongs to.

figma.showUI(__html__, { width: 520, height: 720, themeColors: true });

async function selectionIds() {
  const node = figma.currentPage.selection[0];
  if (!node) return [];
  const ids = [];
  // A code note points at its screen through shared plugin data.
  const noteFor = node.getSharedPluginData("figma_console", "codeNoteFor");
  if (noteFor) ids.push(noteFor);
  for (let n = node; n && n.type !== "PAGE"; n = n.parent) ids.push(n.id);
  return ids;
}

async function send() {
  const node = figma.currentPage.selection[0];
  figma.ui.postMessage({ type: "selection", ids: await selectionIds(), name: node ? node.name : "" });
}

figma.on("selectionchange", send);
figma.ui.onmessage = (msg) => {
  if (msg.type === "ready") send();
  if (msg.type === "open") figma.openExternal(msg.url);
  if (msg.type === "notify") figma.notify(msg.text);
};
