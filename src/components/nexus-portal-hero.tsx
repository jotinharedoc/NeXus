"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smooth = (from: number, to: number, value: number) => {
  const progress = clamp((value - from) / (to - from));

  return progress * progress * (3 - 2 * progress);
};

export default function NexusPortalHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const portalRef = useRef<HTMLDivElement>(null);
  const visibleLogoRef = useRef<HTMLDivElement>(null);

  const insideRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const portal = portalRef.current;
    const visibleLogo = visibleLogoRef.current;
    const inside = insideRef.current;
    const overlay = overlayRef.current;

    if (
      !section ||
      !sticky ||
      !portal ||
      !visibleLogo ||
      !inside ||
      !overlay
    ) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frame = 0;
    let width = sticky.clientWidth;
    let height = sticky.clientHeight;

    let baseWidth = 600;
    let baseHeight = 209;
    let endScale = 16;

    const layout = () => {
      width = sticky.clientWidth;
      height = sticky.clientHeight;

      baseWidth =
        width < 768
          ? Math.min(width * 0.76, 420)
          : Math.min(width * 0.48, 680);

      baseHeight = baseWidth * (209 / 600);

      portal.style.width = `${baseWidth}px`;
      portal.style.height = `${baseHeight}px`;

      endScale =
        Math.min(
          30,
          Math.max(
            width / baseWidth,
            height / baseHeight,
          ) * 3.4,
        );

      section.style.height = reducedMotion.matches
        ? "100svh"
        : "300svh";
    };

    const render = () => {
      frame = 0;

      if (reducedMotion.matches) {
        portal.style.transform = "scale(1)";
        visibleLogo.style.opacity = "1";
        overlay.style.opacity = "1";

        inside.style.opacity = "0";
        inside.style.pointerEvents = "none";

        return;
      }

      const rect = section.getBoundingClientRect();

      const travel = Math.max(
        1,
        section.offsetHeight - height,
      );

      const progress = clamp(-rect.top / travel);

      const zoomProgress = smooth(
        0.08,
        0.78,
        progress,
      );

      const scale = Math.exp(
        Math.log(1) +
          Math.log(endScale) * zoomProgress,
      );

      const rotation =
        -2.1 *
        smooth(0.08, 0.34, progress) *
        (1 - smooth(0.52, 0.76, progress));

      const translateY =
        -10 *
        smooth(0.12, 0.7, progress);

      portal.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
        rotate(${rotation}deg)
      `;

      visibleLogo.style.opacity = String(
        1 - smooth(0.22, 0.58, progress),
      );

      overlay.style.opacity = String(
        1 - smooth(0.12, 0.46, progress),
      );

      const reveal = smooth(
        0.76,
        0.93,
        progress,
      );

      inside.style.opacity = String(reveal);

      inside.style.transform = `
        translate3d(
          0,
          ${(1 - reveal) * 28}px,
          0
        )
      `;

      inside.style.pointerEvents =
        reveal > 0.95 ? "auto" : "none";
    };

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(render);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      layout();
      schedule();
    });

    resizeObserver.observe(sticky);

    window.addEventListener("scroll", schedule, {
      passive: true,
    });

    window.addEventListener("resize", schedule);

    const handleMotionChange = () => {
      layout();
      schedule();
    };

    reducedMotion.addEventListener(
      "change",
      handleMotionChange,
    );

    layout();
    render();

    return () => {
      cancelAnimationFrame(frame);

      resizeObserver.disconnect();

      window.removeEventListener(
        "scroll",
        schedule,
      );

      window.removeEventListener(
        "resize",
        schedule,
      );

      reducedMotion.removeEventListener(
        "change",
        handleMotionChange,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-[300svh] bg-[#10182f]"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-svh overflow-hidden bg-[#10182f]"
      >
        {/* GRID */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />

        {/* ATMOSFERA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1d315c]/70 blur-[110px] md:h-150 md:w-150"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[28%] top-[42%] h-64 w-64 rounded-full bg-[#08eadb]/8 blur-[100px] md:h-96 md:w-96"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[18%] right-[24%] h-64 w-64 rounded-full bg-[#ee3c98]/8 blur-[100px] md:h-96 md:w-96"
        />

        {/* LINHAS TÉCNICAS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-[22%] hidden h-[56%] w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-[22%] hidden h-[56%] w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-1/2 hidden h-px w-5 bg-[#08eadb]/60 lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-1/2 hidden h-px w-5 bg-[#ee3c98]/60 lg:block"
        />

        {/* PORTAL */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div
            ref={portalRef}
            className="relative will-change-transform"
            style={{
              transformOrigin: "50% 50%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage:
                  "url('/nexus-logo.png')",
                maskImage:
                  "url('/nexus-logo.png')",

                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",

                WebkitMaskPosition: "center",
                maskPosition: "center",

                WebkitMaskSize: "contain",
                maskSize: "contain",

                background: `
                  radial-gradient(
                    circle at 18% 20%,
                    rgba(8,234,219,.85),
                    transparent 38%
                  ),
                  radial-gradient(
                    circle at 82% 70%,
                    rgba(238,60,152,.8),
                    transparent 38%
                  ),
                  linear-gradient(
                    135deg,
                    #1d315c,
                    #10182f
                  )
                `,
              }}
            />

            <div
              ref={visibleLogoRef}
              className="absolute inset-0 will-change-[opacity]"
            >
              <Image
                src="/nexus-logo.png"
                alt="Nexus"
                fill
                priority
                sizes="(max-width: 768px) 76vw, 680px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* CONTEÚDO EXTERNO */}
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 z-20 will-change-[opacity]"
        >
          <div className="nexus-container absolute inset-x-0 top-28 flex items-center justify-between md:top-32">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs">
              NEXUS / 2026
            </span>

            <span className="hidden text-xs uppercase tracking-[0.18em] text-white/35 md:block">
              Estratégia · Criação · Tecnologia
            </span>
          </div>

          <div className="absolute left-1/2 top-[29%] -translate-x-1/2">
            <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.3em] text-[#08eadb]/80 md:text-xs">
              Criatividade · Tecnologia · Crescimento
            </span>
          </div>

          <div className="absolute left-1/2 top-[66%] w-[84%] max-w-xl -translate-x-1/2 text-center md:top-[68%]">
            <p className="text-base leading-7 text-white/70 md:text-lg">
              Produtos digitais que movem negócios.
            </p>
          </div>

          <div className="nexus-container absolute inset-x-0 bottom-7 flex items-end justify-between md:bottom-9">
            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.24em] text-white/35 md:text-[10px]">
                Role para entrar
              </span>

              <span className="h-px w-10 bg-white/20 md:w-12" />

              <span className="text-[#08eadb]">
                ↓
              </span>
            </div>

            <span className="text-[10px] tracking-[0.2em] text-white/25">
              00 — 01
            </span>
          </div>
        </div>

        {/* CONTEÚDO INTERNO */}
        <div
          ref={insideRef}
          className="absolute inset-0 z-30 flex items-center opacity-0 will-change-[transform,opacity]"
        >
          <div className="nexus-container">
            <div className="mx-auto max-w-5xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#08eadb] md:text-xs">
                Nexus / Experiências Digitais
              </span>

              <h1 className="nexus-heading mt-6 max-w-4xl text-white">
                Criamos produtos digitais
                <br />

                <span className="text-[#ee3c98]">
                  que movem negócios.
                </span>
              </h1>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.2em]">
                <span className="text-[#ee3c98]">
                  01 Construir
                </span>

                <span className="text-[#08eadb]">
                  02 Crescer
                </span>

                <span className="text-white/55">
                  03 Otimizar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
