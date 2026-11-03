import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * One shared team password for the QC hub (/qc), set as QC_WEB_PASSWORD on Vercel. The cookie holds an
 * HMAC of the password, so changing the password signs everyone out.
 */
export const COOKIE = "qc_hub";

const sign = (password: string): string => createHmac("sha256", password).update("ics-qc-hub").digest("hex");

export const passwordSet = (): boolean => !!process.env.QC_WEB_PASSWORD;

export function checkPassword(given: string): string | null {
  const password = process.env.QC_WEB_PASSWORD;
  if (!password) return null;
  const a = Buffer.from(given);
  const b = Buffer.from(password);
  return a.length === b.length && timingSafeEqual(a, b) ? sign(password) : null;
}

export async function signedIn(): Promise<boolean> {
  const password = process.env.QC_WEB_PASSWORD;
  const value = (await cookies()).get(COOKIE)?.value;
  if (!password || !value) return false;
  const a = Buffer.from(value);
  const b = Buffer.from(sign(password));
  return a.length === b.length && timingSafeEqual(a, b);
}
