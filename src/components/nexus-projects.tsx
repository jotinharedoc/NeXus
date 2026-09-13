const projects = [
  {
    number: "01",
    category: "Sistema",
    title: "Newshoes Control",
    description: "Operação e produção.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
  {
    number: "02",
    category: "Site",
    title: "Senhora Fornazari",
    description: "Marca e experiência digital.",
    tags: ["Site", "Comércio eletrônico", "Responsivo"],
  },
  {
    number: "03",
    category: "Automação",
    title: "Brasfrut",
    description: "Automação e dados.",
    tags: ["Automação", "Dados", "Painel"],
  },
];

function ProjectTag({ children }: { children: string }) {
  return (
    <span className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/45">
      {children}
    </span>
  );
}

function NewshoesVisual() {
  return (
    <div className="relative h-full min-h-80 overflow-hidden bg-[#1d315c] md:min-h-140">
      {/* grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* glows */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#08eadb]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#ee3c98]/10 blur-3xl" />

      {/* fake app */}
      <div className="absolute inset-6 border border-white/10 bg-[#10182f]/70 md:inset-10">
        {/* browser top */}
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ee3c98]" />
            <span className="h-2 w-2 rounded-full bg-[#08eadb]" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Newshoes Control
          </span>
        </div>

        <div className="grid h-[calc(100%-2.75rem)] grid-cols-[64px_1fr] md:grid-cols-[88px_1fr]">
          {/* sidebar */}
          <div className="border-r border-white/10 p-3 md:p-4">
            <div className="h-6 w-6 border border-[#08eadb]/40" />

            <div className="mt-8 space-y-4">
              <div className="h-1.5 w-8 bg-white/15" />
              <div className="h-1.5 w-10 bg-white/10" />
              <div className="h-1.5 w-7 bg-white/10" />
              <div className="h-1.5 w-9 bg-white/10" />
            </div>
          </div>

          {/* dashboard */}
          <div className="p-4 md:p-7">
            <div className="flex items-start justify-between">
              <div>
                <div className="h-2 w-24 bg-white/15" />
                <div className="mt-2 h-1.5 w-16 bg-white/8" />
              </div>

              <div className="h-7 w-20 border border-[#08eadb]/20" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
              <div className="border border-white/10 p-3">
                <div className="h-1.5 w-12 bg-white/10" />
                <div className="mt-5 h-5 w-10 bg-[#08eadb]/35" />
              </div>

              <div className="border border-white/10 p-3">
                <div className="h-1.5 w-12 bg-white/10" />
                <div className="mt-5 h-5 w-14 bg-[#ee3c98]/30" />
              </div>

              <div className="hidden border border-white/10 p-3 lg:block">
                <div className="h-1.5 w-12 bg-white/10" />
                <div className="mt-5 h-5 w-8 bg-white/20" />
              </div>
            </div>

            <div className="mt-3 border border-white/10 p-4">
              <div className="flex h-28 items-end gap-2">
                {[36, 58, 44, 76, 54, 88, 67, 92].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-white/10"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marker */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
        <span className="h-1.5 w-1.5 rotate-45 bg-[#08eadb]" />
        Sistema interno
      </div>
    </div>
  );
}

function FornazariVisual() {
  return (
    <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[#f2ebe8] md:h-64">
      <div className="absolute left-6 top-6 text-[#10182f]">
        <span className="text-[9px] uppercase tracking-[0.24em] text-[#10182f]/45">
          Moda feminina
        </span>

        <p className="nexus-serif mt-3 text-4xl font-light italic tracking-[-0.04em]">
          Fornazari
        </p>
      </div>

      <div className="absolute -bottom-16 right-8 h-52 w-36 rotate-6 border border-[#10182f]/10 bg-white/60" />

      <div className="absolute bottom-7 left-6 h-px w-20 bg-[#ee3c98]" />
    </div>
  );
}

function BrasfrutVisual() {
  return (
    <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-[#142343] md:h-64">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative flex items-center gap-4 md:gap-6">
        <div className="flex h-20 w-20 flex-col justify-center border border-white/15 bg-[#10182f] p-3">
          <span className="text-[9px] text-white/35">PDF</span>
          <span className="mt-1 text-xs text-white/70">NF</span>
        </div>

        <div className="flex items-center">
          <span className="h-px w-8 bg-[#08eadb]/50 md:w-12" />
          <span className="ml-1 text-[#08eadb]">→</span>
        </div>

        <div className="flex h-20 w-20 items-end gap-1 border border-[#ee3c98]/30 bg-[#10182f] p-3">
          <span className="h-5 flex-1 bg-[#ee3c98]/30" />
          <span className="h-8 flex-1 bg-[#08eadb]/30" />
          <span className="h-11 flex-1 bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export default function NexusProjects() {
  const [featured, second, third] = projects;

  return (
    <section
      id="projetos"
      className="relative overflow-hidden bg-[#10182f] px-4 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-300">
        {/* HEADER */}
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rotate-45 border border-[#08eadb]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs">
                Projetos / 03
              </span>
            </div>

            <h2 className="nexus-heading mt-7 max-w-3xl">
              Construído
              <br />

              <span className="text-[#08eadb]">
                no mundo real.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-white/50 md:text-base md:leading-8">
            Sistemas, sites e automações.
          </p>
        </div>

        {/* FEATURED */}
        <article className="mt-12 border border-white/10 md:mt-16">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex min-h-96 flex-col justify-between p-6 md:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#ee3c98]">
                    {featured.category}
                  </span>

                  <span className="text-[10px] tracking-[0.18em] text-white/25">
                    {featured.number}
                  </span>
                </div>

                <h3 className="mt-14 text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                  {featured.title}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/50 md:text-[15px]">
                  {featured.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                    Projeto em destaque
                  </span>

                  <span className="text-xl text-[#08eadb]">↗</span>
                </div>
              </div>
            </div>

            <NewshoesVisual />
          </div>
        </article>

        {/* SECONDARY */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="border border-white/10">
            <FornazariVisual />

            <div className="flex min-h-72 flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#ee3c98]">
                    {second.category}
                  </span>

                  <span className="text-[10px] text-white/25">
                    {second.number}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-medium tracking-[-0.045em]">
                  {second.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                  {second.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {second.tags.map((tag) => (
                  <ProjectTag key={tag}>{tag}</ProjectTag>
                ))}
              </div>
            </div>
          </article>

          <article className="border border-white/10">
            <BrasfrutVisual />

            <div className="flex min-h-72 flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#08eadb]">
                    {third.category}
                  </span>

                  <span className="text-[10px] text-white/25">
                    {third.number}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-medium tracking-[-0.045em]">
                  {third.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                  {third.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {third.tags.map((tag) => (
                  <ProjectTag key={tag}>{tag}</ProjectTag>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-white/25">
            Nexus / Projetos
          </span>

          <a
            href="#contato"
            className="group flex w-fit items-center gap-4 text-sm text-white/70"
          >
            <span>Tem um projeto? Vamos construir.</span>

            <span className="text-[#08eadb] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
