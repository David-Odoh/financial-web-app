"use client";

import { useEffect, useState } from "react";
import NProgress from "nprogress";

// Tailwind CSS styles for NProgress with conditional background color
const tailwindNProgressStyles = `
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--color-hint); /* Default background */
    z-index: 9999;
  }

  /* Tailwind's dark mode variant */
  .dark #nprogress .bar {
    background-color: var(--color-accent); /* Background in dark mode */
  }
`;

export default function ProgressBar() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure that the code runs only after the component is mounted
  useEffect(() => {
    setIsMounted(true);
    NProgress.configure({ showSpinner: false });

    const handleLinkClick = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      const target = mouseEvent.currentTarget as HTMLAnchorElement;
      const targetUrl = target.href;
      const currentUrl = window.location.href;

      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const observeAnchorTags = () => {
      const anchors = document.querySelectorAll<HTMLAnchorElement>("a[href]");
      anchors.forEach((anchor) =>
        anchor.addEventListener("click", handleLinkClick)
      );
    };

    const mutationObserver = new MutationObserver(observeAnchorTags);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Enhance pushState and replaceState to finish progress bar
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args as any);
      NProgress.done();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args as any);
      NProgress.done();
    };

    // Finish the progress bar when the page is loaded
    const handlePageLoad = () => {
      NProgress.done();
    };
    window.addEventListener("load", handlePageLoad);

    return () => {
      mutationObserver.disconnect();
      document.querySelectorAll("a[href]").forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  // Only render the style tag on the client side after the component is mounted
  if (!isMounted) return null;

  return <style>{tailwindNProgressStyles}</style>;
}
