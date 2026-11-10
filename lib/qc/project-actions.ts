"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { withBase } from "@/lib/base-path";
import { getProject, isLive, loadProjects } from "@/lib/projects";
import { signedIn } from "@/lib/qc/auth";
import { PROJECT_COOKIE } from "@/lib/qc/project";
import { primeLive } from "@/lib/qc/remote";

/** Header picker: show another project in the hub, then go to its overview. */
export async function switchProject(slug: string): Promise<void> {
  if (!(await signedIn())) throw new Error("Cần đăng nhập Hub.");
  await loadProjects();
  if (!getProject(slug)) throw new Error("Không có dự án này.");
  (await cookies()).set(PROJECT_COOKIE, slug, { path: withBase("/hub"), httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 * 24 * 365 });
  redirect("/hub");
}

/** Read a live project's docs repo and Figma scan again now, instead of waiting for the cache. */
export async function refreshProject(slug: string): Promise<void> {
  if (!(await signedIn())) throw new Error("Cần đăng nhập Hub.");
  await loadProjects();
  const p = getProject(slug);
  if (p && isLive(p)) await primeLive(p, true);
}
