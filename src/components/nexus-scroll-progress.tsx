"use client";

import { useEffect, useRef } from "react";

export default function NexusScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;

    if (!bar) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;

      bar.style.transform = `scaleX(${progress})`;
    };

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", schedule, {
      passive: true,
    });

    window.addEventListener("resize", schedule);

    update();

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-100 h-px bg-white/5"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-linear-to-r from-[#08eadb] to-[#ee3c98]"
        style={{
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
