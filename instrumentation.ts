/** Runs once when the server starts: on the company server, keep the BA docs in sync (lib/qc/ba-sync.ts). */
export async function register(): Promise<void> {
  if (process.env.NEXT_RUNTIME !== "nodejs" || !process.env.DOCS_BA_DIR) return;
  const { startBaSync } = await import("@/lib/qc/ba-sync");
  startBaSync();
}
