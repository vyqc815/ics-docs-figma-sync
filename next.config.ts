import type { NextConfig } from "next";

// The Figma viewer pages and API read the page Markdown and generated code at request time.
const figmaSources = ["./figma.pages.json", "./docs/pages/**/*", "./components/figma/**/*"];

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/figma/[name]/spec": figmaSources,
    "/figma/[name]/code": figmaSources,
    "/api/figma-source": figmaSources,
  },
};

export default nextConfig;
