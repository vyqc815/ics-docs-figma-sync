import type { NextConfig } from "next";

// The Figma viewer pages and API read the page Markdown and generated code at request time.
const figmaSources = ["./figma.pages.json", "./docs/pages/**/*", "./components/figma/**/*"];

const qcSources = ["./figma.pages.json", "./docs/requirements/**/*", "./docs/he-thong-ma/**/*", "./scripts/figma/screen-requirements.json"];

const nextConfig: NextConfig = {
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
