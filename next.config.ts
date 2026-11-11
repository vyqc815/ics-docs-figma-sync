import type { NextConfig } from "next";

// The Figma viewer pages and API read the page Markdown and generated code at request time.
const figmaSources = ["./figma.pages.json", "./docs/pages/**/*", "./components/figma/**/*"];

const qcSources = ["./figma.pages.json", "./docs/requirements/**/*", "./docs/he-thong-ma/**/*", "./scripts/figma/screen-requirements.json", "./docs/du-an/projects.json", "./projects/**/*"];

// One id per build, inlined into both the server and the browser code: the hub compares the two to notice a
// new deploy (components/qc/new-version.tsx, app/hub/phien-ban/route.ts).
const BUILD_ID = (process.env.GITHUB_SHA ?? process.env.VERCEL_GIT_COMMIT_SHA ?? "").slice(0, 8) + "-" + Date.now().toString(36);

const nextConfig: NextConfig = {
  env: { HUB_BUILD_ID: BUILD_ID },
  // NEXT_OUTPUT=standalone: a self-contained server bundle for the company server (deploy.yml, job "server");
  // Vercel builds leave it unset.
  ...(process.env.NEXT_OUTPUT === "standalone" ? { output: "standalone" as const } : {}),
  // NEXT_PUBLIC_BASE_PATH=/docs-figma: served under a sub-path of the company domain (lib/base-path.ts)
  ...(process.env.NEXT_PUBLIC_BASE_PATH
    ? {
        basePath: process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/$/, ""),
        // nginx sends /docs-figma to /docs-figma/; stripping that slash again would loop
        skipTrailingSlashRedirect: true,
        // the sub-path opens the hub (icstestsapi.pls.edu.vn/docs-figma → /docs-figma/hub)
        redirects: async () => [{ source: "/", destination: "/hub", permanent: false }],
      }
    : {}),
  outputFileTracingIncludes: {
    "/figma/[name]/spec": figmaSources,
    "/figma/[name]/code": figmaSources,
    "/api/figma-source": figmaSources,
    // QC hub (/hub) reads requirements, registries and the screen map at request time
    "/hub": qcSources,
    "/hub/**": qcSources,
  },
};

export default nextConfig;
