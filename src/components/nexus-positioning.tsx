export default function NexusPositioning() {
  return (
    <section className="relative overflow-hidden bg-[#1d315c] px-4 py-24 text-white md:px-8 md:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#08eadb]/10 blur-[130px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ee3c98]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-300">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rotate-45 border border-[#08eadb]" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs">
            Nexus / Visão
          </span>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.06em] md:text-6xl lg:text-7xl">
            A tecnologia certa.
            <br />

            <span className="text-[#08eadb]">
              Na medida certa.
            </span>
          </h2>

          <div className="border-t border-white/15 pt-6">
            <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
              Simples quando possível.
              <br />
              Sofisticado quando necessário.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-y border-white/10 md:grid-cols-3">
          <div className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:pr-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ee3c98]">
              Simples quando possível
            </span>
          </div>

          <div className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#08eadb]">
              Sofisticado quando necessário
            </span>
          </div>

          <div className="py-6 md:pl-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Sempre funcional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
