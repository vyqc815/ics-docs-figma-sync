import { NextResponse, type NextRequest } from "next/server";

/**
 * Sign-in gate of the QC hub, checked before any /hub page renders. A redirect from the hub layout is not
 * enough: Next renders the layout and the page in parallel, so the page's data would still stream to a
 * visitor who is not signed in. Same cookie as lib/qc/auth.ts: payload + "." + HMAC-SHA256(QC_WEB_PASSWORD,
 * "ics-qc-hub|" + payload), payload carrying the expiry.
 */
const COOKIE = "qc_hub";

async function valid(value: string, password: string): Promise<boolean> {
  const [payload, sig] = value.split(".");
  if (!payload || !sig) return false;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(`ics-qc-hub|${payload}`)));
  if (Array.from(mac, (b) => b.toString(16).padStart(2, "0")).join("") !== sig) return false;
  try {
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return (JSON.parse(json) as { e: number }).e > Date.now() / 1000;
  } catch {
    return false;
  }
}

export async function proxy(req: NextRequest): Promise<NextResponse> {
  const password = process.env.QC_WEB_PASSWORD;
  const value = req.cookies.get(COOKIE)?.value;
  if (password && value && (await valid(value, password))) return NextResponse.next();
  if (req.nextUrl.pathname.startsWith("/hub/anh/")) return new NextResponse("Cần đăng nhập.", { status: 401 });
  const login = new URL("/hub/dang-nhap", req.url);
  login.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(login);
}

export const config = { matcher: ["/hub", "/hub/((?!dang-nhap).*)"] };
