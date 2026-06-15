"use client";

import { useEffect } from "react";
import { scrollToId } from "../utils/scroll";

export function HashScrollOnLoad() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToId(hash, "auto");
      });
    });
  }, []);

  return null;
}
