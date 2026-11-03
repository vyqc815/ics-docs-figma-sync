import { Suspense, type ReactNode } from "react";

import { FrameHost } from "@/components/frames/bai-tap-ve-nha";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={children}>
      <FrameHost>{children}</FrameHost>
    </Suspense>
  );
}
