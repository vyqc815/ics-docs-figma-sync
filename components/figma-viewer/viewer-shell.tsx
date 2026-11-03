import Link from "next/link";

import type { FigmaPage } from "@/lib/figma-source";

const STYLES = `
.fv { --bg:#fff; --bg2:#f6f7f9; --fg:#111827; --fg2:#6b7280; --line:#e5e7eb; --accent:#e65100;
  --kw:#b4237a; --str:#1a7f37; --tag:#0b62c4; --attr:#8a5a00; --com:#8b949e;
  min-height:100vh; background:var(--bg); color:var(--fg); font:14px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif; }
@media (prefers-color-scheme: dark) { .fv { --bg:#0f1115; --bg2:#181b21; --fg:#e5e7eb; --fg2:#9ca3af; --line:#2a2e36;
  --kw:#ff7ab2; --str:#7ee787; --tag:#79c0ff; --attr:#e3b341; --com:#8b949e; } }
.fv-head { position:sticky; top:0; z-index:10; background:var(--bg); border-bottom:1px solid var(--line); }
.fv-wrap { max-width:1100px; margin:0 auto; padding:0 16px; }
.fv-top { display:flex; align-items:center; gap:12px; padding-top:12px; flex-wrap:wrap; }
.fv-name { font-weight:700; font-size:16px; } .fv-route { color:var(--fg2); font:12px ui-monospace,Menlo,monospace; }
.fv-sp { flex:1; }
.fv-tabs { display:flex; gap:4px; margin-top:6px; }
.fv-tab { padding:8px 12px; color:var(--fg2); border-bottom:2px solid transparent; text-decoration:none; font-weight:500; }
.fv-tab[aria-current="page"] { color:var(--fg); border-bottom-color:var(--accent); }
.fv-btn { border:1px solid var(--line); background:var(--bg); color:var(--fg); border-radius:8px; padding:4px 10px; font:inherit; font-size:12px; cursor:pointer; text-decoration:none; white-space:nowrap; }
.fv-btn:hover { background:var(--bg2); }
.fv-bar { display:flex; justify-content:space-between; align-items:center; gap:8px; padding:10px 0; color:var(--fg2); font:12px ui-monospace,Menlo,monospace; }
.fv-files { display:flex; flex-wrap:wrap; gap:6px; padding:12px 0 4px; }
.fv-chip { border:1px solid var(--line); border-radius:999px; padding:2px 10px; color:var(--fg2); text-decoration:none; font:12px ui-monospace,Menlo,monospace; }
.fv-chip[aria-current="page"] { background:var(--accent); border-color:var(--accent); color:#fff; }
.fv pre { margin:0 0 24px; padding:12px; background:var(--bg2); border-radius:10px; overflow:auto; font:12px/1.6 ui-monospace,Menlo,monospace; tab-size:2; }
.fv .kw{color:var(--kw)} .fv .str{color:var(--str)} .fv .tag{color:var(--tag)} .fv .attr{color:var(--attr)} .fv .com{color:var(--com)}
.fv-md { padding-bottom:40px; }
.fv-md h1 { font-size:22px; margin:18px 0 8px; } .fv-md h2 { font-size:18px; margin:24px 0 8px; padding-bottom:4px; border-bottom:1px solid var(--line); }
.fv-md h3 { font-size:15px; margin:16px 0 6px; } .fv-md h1, .fv-md h2, .fv-md h3, .fv-md h4 { font-weight:700; } .fv-md p { margin:6px 0; } .fv-md ul { margin:4px 0; padding-left:20px; list-style:disc; }
.fv-md code { background:var(--bg2); padding:0 4px; border-radius:4px; font:12px ui-monospace,Menlo,monospace; }
.fv-md pre { margin:8px 0; }
.fv-md blockquote { margin:8px 0; padding:8px 12px; border-left:3px solid var(--accent); background:var(--bg2); border-radius:0 8px 8px 0; }
.fv-md table { border-collapse:collapse; margin:8px 0; font-size:12px; display:block; overflow-x:auto; }
.fv-md th, .fv-md td { border:1px solid var(--line); padding:4px 8px; text-align:left; vertical-align:top; }
.fv-md th { background:var(--bg2); }
.fv-md a { color:var(--tag); }
`;

/**
 * Header shared by a screen's spec and code views: name, route, tabs and the live demo.
 * `embed` (?embed=1, inside the QC hub) shows the content only: the hub has its own tabs.
 */
export const ViewerShell = ({
  page,
  active,
  hasCode,
  embed = false,
  children,
}: {
  page: FigmaPage;
  active: "spec" | "code";
  hasCode: boolean;
  embed?: boolean;
  children: React.ReactNode;
}): React.JSX.Element => (
  <div className="fv">
    <style>{STYLES}</style>
    {!embed && (
    <header className="fv-head">
      <div className="fv-wrap">
        <div className="fv-top">
          <Link href="/figma" className="fv-btn">
            ← Tất cả màn
          </Link>
          <div>
            <div className="fv-name">{page.name.toUpperCase()}</div>
            <div className="fv-route">{page.route}</div>
          </div>
          <div className="fv-sp" />
          {hasCode && (
            <a href={page.route} className="fv-btn" target="_blank" rel="noreferrer">
              ▶ Xem demo
            </a>
          )}
        </div>
        <nav className="fv-tabs">
          <Link href={`/figma/${page.name}/spec`} className="fv-tab" aria-current={active === "spec" ? "page" : undefined}>
            📄 Spec MD
          </Link>
          {hasCode && (
            <Link href={`/figma/${page.name}/code`} className="fv-tab" aria-current={active === "code" ? "page" : undefined}>
              🧩 Code
            </Link>
          )}
        </nav>
      </div>
    </header>
    )}
    <main className="fv-wrap">{children}</main>
  </div>
);
