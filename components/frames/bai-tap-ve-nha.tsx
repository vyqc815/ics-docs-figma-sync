"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import type { ComponentType, ReactNode } from "react";

/** Popup and state frames of the Bài tập về nhà cluster, opened on their parent route by code. */
const lazy = (load: () => Promise<ComponentType>) => dynamic(load);

export const POPUPS: Record<string, ComponentType> = {
  "CD-KH-060110": lazy(() => import("@/components/figma/cd-kh-060110").then((m) => m.CdKh060110Page)),
  "CD-KH-060120": lazy(() => import("@/components/figma/cd-kh-060120").then((m) => m.CdKh060120Page)),
  "CD-KH-060121": lazy(() => import("@/components/figma/cd-kh-060121").then((m) => m.CdKh060121Page)),
  "CD-KH-060122": lazy(() => import("@/components/figma/cd-kh-060122").then((m) => m.CdKh060122Page)),
  "CD-KH-060123": lazy(() => import("@/components/figma/cd-kh-060123").then((m) => m.CdKh060123Page)),
  "CD-KH-060124": lazy(() => import("@/components/figma/cd-kh-060124").then((m) => m.CdKh060124Page)),
  "CD-KH-060125": lazy(() => import("@/components/figma/cd-kh-060125").then((m) => m.CdKh060125Page)),
  "CD-KH-060140": lazy(() => import("@/components/figma/cd-kh-060140").then((m) => m.CdKh060140Page)),
  "CD-KH-060141": lazy(() => import("@/components/figma/cd-kh-060141").then((m) => m.CdKh060141Page)),
  "CD-KH-060150": lazy(() => import("@/components/figma/cd-kh-060150").then((m) => m.CdKh060150Page)),
};

export const STATES: Record<string, ComponentType> = {
  "CD-KH-060130": lazy(() => import("@/components/figma/cd-kh-060130").then((m) => m.CdKh060130Page)),
  "CD-KH-060160": lazy(() => import("@/components/figma/cd-kh-060160").then((m) => m.CdKh060160Page)),
};

export const FrameHost = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams();
  const stateCode = params.get("state") ?? "";
  const popupCode = params.get("popup") ?? "";
  const State = STATES[stateCode];
  const Popup = POPUPS[popupCode];

  return (
    <>
      {State ? (
        <div data-ui={stateCode}>
          <State />
        </div>
      ) : (
        children
      )}
      {Popup ? (
        <div className="fixed inset-0 z-50 overflow-auto bg-black/50 py-10" data-ui={popupCode}>
          <div className="mx-auto w-fit">
            <Popup />
          </div>
        </div>
      ) : null}
    </>
  );
};
