"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { PageFadeIn } from "@/components/PageFadeIn";
import { RouteChangeLoader } from "@/components/RouteChangeLoader";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;

  return (
    <>
      <RouteChangeLoader />
      <PageFadeIn routeKey={routeKey}>{children}</PageFadeIn>
    </>
  );
}
