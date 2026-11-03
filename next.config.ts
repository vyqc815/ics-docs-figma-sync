import type { NextConfig } from "next";

// The Figma viewer pages and API read the page Markdown and generated code at request time.
const figmaSources = ["./figma.pages.json", "./docs/pages/**/*", "./components/figma/**/*"];

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/figma/[name]/spec": figmaSources,
    "/figma/[name]/code": figmaSources,
    "/api/figma-source": figmaSources,
    // QC web reads requirements and the code system through /api/qc (key-protected)
    "/api/qc/[...path]": ["./docs/requirements/**/*", "./docs/he-thong-ma/**/*"],
  },
};

export default nextConfig;
