import { cookies } from "next/headers";

import { DEFAULT_PROJECT, isLive, loadProjects, type Project } from "@/lib/projects";
import { requestProject } from "@/lib/qc/data";
import { primeLive } from "@/lib/qc/remote";

/**
 * The project the hub shows: the one picked in the header (cookie), else ICS. Call `await hubProject()` at the
 * top of every hub layout, page and route that reads lib/qc/data.ts: it loads a live project's data and makes it
 * the default for this request, so the readers need no project argument.
 */
export const PROJECT_COOKIE = "hub-project";

export async function hubProject(): Promise<Project> {
  const list = await loadProjects();
  const picked = (await cookies()).get(PROJECT_COOKIE)?.value ?? DEFAULT_PROJECT;
  const p = list.find((x) => x.slug === picked) ?? list[0];
  if (isLive(p)) await primeLive(p);
  requestProject().slug = p.slug;
  return p;
}
