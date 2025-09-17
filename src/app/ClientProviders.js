"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../lib/gtm";

const GoogleTagManager = dynamic(() => import("./GoogleTagManager"), { ssr: false, loading: () => null });
const Analytics = dynamic(() => import("../components/Analytics"), { ssr: false, loading: () => null });

export default function ClientProviders({ children }) {
  const pathname = usePathname();
  const prevTitleRef = useRef();

  useEffect(() => {
    // Only run if window and document are available (client-side)
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const handleRouteChange = () => {
        const checkTitleChange = () => {
          setTimeout(() => {
            const title = document.title || "Untitled Page";
            if (title !== prevTitleRef.current) {
              prevTitleRef.current = title;
              pageview(pathname);
            }
          }, 100);
        };

        checkTitleChange();
      };

      handleRouteChange();
      window.addEventListener("popstate", handleRouteChange);
      return () => window.removeEventListener("popstate", handleRouteChange);
    }
  }, [pathname]);

  return (
    <>
      <GoogleTagManager />
      <Analytics />
      {children}
    </>
  );
}