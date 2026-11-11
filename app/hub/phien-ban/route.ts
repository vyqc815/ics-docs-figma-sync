/** Build id of the running server, read by the open hub pages to notice a new deploy (components/qc/new-version.tsx). */
export const dynamic = "force-dynamic";

export function GET(): Response {
  return Response.json({ build: process.env.HUB_BUILD_ID ?? "" }, { headers: { "Cache-Control": "no-store" } });
}
