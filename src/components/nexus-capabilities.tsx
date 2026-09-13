const capabilities = [
  {
    number: "01",
    title: "CONSTRUIR",
    description: "Sites, produtos e sistemas.",
    services: [
      "Sites",
      "Páginas de conversão",
      "Produtos digitais",
      "Sistemas",
    ],
    accent: "#ee3c98",
  },
  {
    number: "02",
    title: "CRESCER",
    description: "Aquisição e conversão.",
    services: [
      "Tráfego",
      "Aquisição",
      "Criativos",
      "Conversão",
    ],
    accent: "#08eadb",
  },
  {
    number: "03",
    title: "OTIMIZAR",
    description: "Dados e automação.",
    services: [
      "Painéis",
      "Automações",
      "Integrações",
      "Desempenho",
    ],
    accent: "#ee3c98",
  },
];

export default function NexusCapabilities() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#10182f] px-4 py-24 text-white md:px-8 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-300">
        <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rotate-45 border border-[#ee3c98]" />

              <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                Soluções / 01
              </span>
            </div>

            <h2 className="nexus-heading mt-8">
              Do conceito
              <br />

              <span className="text-white/60">
                à escala.
              </span>
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-white/60">
            Produto · Crescimento · Operação
          </p>
        </div>

        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="grid gap-8 border-b border-white/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-12 md:py-16"
          >
            <span
              className="text-[10px] font-semibold tracking-[0.22em]"
              style={{
                color: capability.accent,
              }}
            >
              {capability.number}
            </span>

            <div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {capability.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-white/65">
                {capability.description}
              </p>
            </div>

            <div>
              {capability.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center justify-between border-b border-white/10 py-4 first:pt-0 last:border-b-0"
                >
                  <span className="text-base text-white/75">
                    {service}
                  </span>

                  <span
                    style={{
                      color: capability.accent,
                    }}
                  >
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}

        <div className="pt-12">
          <p className="text-sm text-white/60">
            Tecnologia com propósito.
          </p>
        </div>
      </div>
    </section>
  );
}
