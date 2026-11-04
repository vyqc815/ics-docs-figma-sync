/**
 * Path prefix when the app runs under a sub-path of another domain (company server: /docs-figma), set at build
 * time by NEXT_PUBLIC_BASE_PATH; empty on Vercel. <Link>, redirect() and router calls get it from Next's basePath;
 * plain <img>, <a>, <iframe> and cookie paths go through withBase().
 */
export const BASE = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const withBase = (path: string): string => (BASE && path.startsWith("/") && !path.startsWith("//") && !path.startsWith(`${BASE}/`) ? `${BASE}${path}` : path);
