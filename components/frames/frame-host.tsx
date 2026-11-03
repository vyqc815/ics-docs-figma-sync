"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { type ReactNode, useMemo } from "react";

import { FRAMES } from "@/components/frames/frames.generated";

/** Popup, dropdown and state frames opened by code on any route: `?popup=<MÃ>` overlays, `?state=<MÃ>` replaces. */
export const FrameHost = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams();
  const stateCode = params.get("state") ?? "";
  const popupCode = params.get("popup") ?? "";
  const stateFrame = FRAMES[stateCode];
  const popupFrame = FRAMES[popupCode];
  const State = useMemo(() => (stateFrame ? dynamic(stateFrame.load) : null), [stateFrame]);
  const Popup = useMemo(() => (popupFrame ? dynamic(popupFrame.load) : null), [popupFrame]);

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
