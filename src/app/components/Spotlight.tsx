"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--spotlight-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--spotlight-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10"
    />
  );
}
