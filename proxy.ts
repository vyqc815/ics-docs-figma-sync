import { NextResponse, type NextRequest } from "next/server";

/**
 * Password gate of the QC hub, checked before any /hub page renders. A redirect from the hub layout is not
 * enough: Next renders the layout and the page in parallel, so the page's data would still stream to a
 * visitor who is not signed in. Same cookie as lib/qc/auth.ts: HMAC-SHA256(QC_WEB_PASSWORD, "ics-qc-hub").
 */
const COOKIE = "qc_hub";

async function expected(password: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode("ics-qc-hub")));
  return Array.from(sig, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function proxy(req: NextRequest): Promise<NextResponse> {
  const password = process.env.QC_WEB_PASSWORD;
  const value = req.cookies.get(COOKIE)?.value;
  if (password && value && value === (await expected(password))) return NextResponse.next();
  if (req.nextUrl.pathname.startsWith("/hub/anh/")) return new NextResponse("Cần đăng nhập.", { status: 401 });
  const login = new URL("/hub/dang-nhap", req.url);
  login.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(login);
}

export const config = { matcher: ["/hub", "/hub/((?!dang-nhap).*)"] };
