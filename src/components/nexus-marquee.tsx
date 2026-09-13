const items = Array.from({ length: 8 });

function LogoItem({ index }: { index: number }) {
  const color = index % 2 === 0 ? "#ee3c98" : "#08eadb";

  return (
    <div className="flex shrink-0 items-center">
      {/* LOGO */}
      <div
        className="mx-8 h-8 w-28 shrink-0 md:mx-12 md:h-10 md:w-36"
        style={{
          backgroundColor: color,

          WebkitMaskImage: "url('/nexus-logo.png')",
          maskImage: "url('/nexus-logo.png')",

          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",

          WebkitMaskPosition: "center",
          maskPosition: "center",

          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      {/* DIAMANTE */}
      <span
        className="h-2.5 w-2.5 shrink-0 rotate-45 border md:h-3 md:w-3"
        style={{
          borderColor: index % 2 === 0 ? "#08eadb" : "#ee3c98",
        }}
      />
    </div>
  );
}

function MarqueeGroup({ prefix }: { prefix: string }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((_, index) => (
        <LogoItem
          key={`${prefix}-${index}`}
          index={index}
        />
      ))}
    </div>
  );
}

export default function NexusMarquee() {
  return (
    <section
      aria-label="Nexus"
      className="relative overflow-hidden border-y border-white/10 bg-[#10182f]"
    >
      <style>
        {`
          @keyframes nexus-marquee {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .nexus-marquee-track {
            animation: nexus-marquee 24s linear infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .nexus-marquee-track {
              animation: none;
              transform: none;
            }
          }
        `}
      </style>

      {/* LINHA SUPERIOR */}
      <div className="absolute left-0 top-0 h-px w-[28%] bg-[#08eadb]" />

      <div className="absolute right-0 top-0 h-px w-[18%] bg-[#ee3c98]" />

      {/* MARQUEE */}
      <div className="flex h-20 items-center overflow-hidden md:h-24">
        <div className="nexus-marquee-track flex w-max min-w-max">
          <MarqueeGroup prefix="first" />
          <MarqueeGroup prefix="second" />
        </div>
      </div>

      {/* LINHA INFERIOR */}
      <div className="absolute bottom-0 left-0 h-px w-[18%] bg-[#ee3c98]" />

      <div className="absolute bottom-0 right-0 h-px w-[28%] bg-[#08eadb]" />
    </section>
  );
}
