const steps = [
  {
    number: "01",
    title: "ENTENDER",
    description:
      "O problema.",
  },
  {
    number: "02",
    title: "CONSTRUIR",
    description:
      "A solução.",
  },
  {
    number: "03",
    title: "LANÇAR",
    description:
      "Colocar no mundo.",
  },
  {
    number: "04",
    title: "EVOLUIR",
    description:
      "Melhorar sempre.",
  },
];

export default function NexusProcess() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-[#f4f5f7] px-4 py-24 text-[#10182f] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-300">
        <div className="grid gap-10 border-b border-[#10182f]/15 pb-14 md:grid-cols-[1fr_0.8fr] md:items-end md:pb-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rotate-45 border border-[#ee3c98]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#10182f]/40 md:text-xs">
                Processo / 03
              </span>
            </div>

            <h2 className="mt-7 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              Simples de
              <br />
              <span className="text-[#1d315c]">
                trabalhar.
              </span>
            </h2>
          </div>

        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-px w-full bg-[#10182f]/15 md:block"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`relative border-b border-[#10182f]/15 py-10 md:min-h-72 md:border-b-0 md:px-7 md:py-12 ${
                  index !== steps.length - 1
                    ? "md:border-r md:border-[#10182f]/15"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={
                      index % 2 === 0
                        ? "text-[10px] font-semibold tracking-[0.2em] text-[#ee3c98]"
                        : "text-[10px] font-semibold tracking-[0.2em] text-[#08a99f]"
                    }
                  >
                    {step.number}
                  </span>

                  <span
                    className={
                      index % 2 === 0
                        ? "h-2 w-2 rotate-45 bg-[#ee3c98]"
                        : "h-2 w-2 rotate-45 bg-[#08eadb]"
                    }
                  />
                </div>

                <div className="mt-10 md:mt-16">
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#10182f]/50">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
