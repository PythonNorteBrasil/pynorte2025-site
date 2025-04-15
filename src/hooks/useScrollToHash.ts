"use client";

import { useEffect } from "react";

export const useScrollToHash = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;

    if (hash) {
      const elementId = hash.replace("#", "");

      const scrollToElement = () => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };

      setTimeout(scrollToElement, 100);
    }
  }, []);
};
