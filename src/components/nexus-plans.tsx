const plans = [
  {
    name: "Nexus Start",
    number: "01",
    price: "997",
    features: [
      "Página de conversão básica",
      "Redação dos textos",
      "Painel simples",
    ],
    accent: "#08eadb",
  },
  {
    name: "Nexus Pro",
    number: "02",
    price: "1.890",
    features: [
      "Página de conversão básica",
      "Redação dos textos",
      "Automação a definir",
      "3 meses de manutenção",
      "Painel completo",
    ],
    accent: "#ee3c98",
  },
];

const customFeatures = [
  "Planejamento individual",
  "Acompanhamento durante 3 meses",
  "2 reuniões mensais de alinhamento",
  "Painel de controle",
];

export default function NexusPlans() {
  return (
    <section
      id="planos"
      aria-labelledby="plans-title"
      className="relative bg-[#10182f] px-4 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-300">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 rotate-45 border border-[#08eadb]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 md:text-xs">
            Planos / 02
          </span>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 id="plans-title" className="nexus-heading">
            Seu próximo
            <br />
            <span className="text-white/60">passo digital.</span>
          </h2>
          <p className="max-w-xs text-base leading-7 text-white/65">
            Um ponto de partida. Ou uma solução na sua medida.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className="relative flex min-w-0 flex-col border-t border-white/20 bg-[#14203a] p-6 sm:p-8 lg:p-12">
              <span aria-hidden="true" className="absolute -top-px left-0 h-px w-20" style={{ backgroundColor: plan.accent }} />
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{plan.name}</h3>
                <span className="text-[10px] tracking-[0.2em]" style={{ color: plan.accent }}>{plan.number}</span>
              </div>

              <p className="mt-8 flex flex-wrap items-baseline gap-x-2" aria-label={`R$ ${plan.price},00`}>
                <span className="text-sm text-white/65">R$</span>
                <span className="text-5xl font-semibold leading-none tracking-[-0.045em] tabular-nums sm:text-6xl lg:text-7xl">{plan.price}<span className="text-2xl tracking-tight text-white/65">,00</span></span>
              </p>
              <p className="mt-4 text-xs" style={{ color: plan.accent }}>1 ano de domínio grátis</p>

              <ul className="my-8 flex-1 border-t border-white/10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 border-b border-white/10 py-4 text-base leading-7 text-white/75">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rotate-45" style={{ backgroundColor: plan.accent }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                aria-label={`Conversar sobre o ${plan.name}`}
                className="group flex items-center justify-between gap-4 border border-white/25 px-5 py-4 text-sm font-medium transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Conversar sobre este plano
                <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: plan.accent }}>↗</span>
              </a>
            </article>
          ))}
        </div>

        <article className="relative mt-4 grid gap-10 bg-[#1d315c] p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:p-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#08eadb]">
              <span aria-hidden="true" className="h-2 w-2 rotate-45 border border-current" />
              Sob medida
            </div>
            <h3 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Nexus Custom</h3>
            <p className="mt-4 text-base leading-7 text-white/75">Planejado a partir do seu projeto.</p>
            <a href="#contato" style={{ color: "#10182f" }} className="mt-8 inline-flex min-h-12 items-center gap-8 bg-[#08eadb] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#6ff3e9]">
              Vamos conversar
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ul className="border-t border-white/10 lg:border-t-0">
            {customFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 border-b border-white/15 py-4 text-base leading-7 text-white/85 last:border-b-0">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-[#08eadb]" />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
