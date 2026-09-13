export default function NexusFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#10182f] px-4 pb-8 pt-16 text-white md:px-8 md:pb-10 md:pt-20">
      <div className="absolute left-0 top-0 h-px w-1/3 bg-[#08eadb]" />
      <div className="absolute right-0 top-0 h-px w-1/4 bg-[#ee3c98]" />

      <div className="mx-auto max-w-300">
        <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative h-4 w-4 rotate-45 border border-[#08eadb]">
                <span className="absolute inset-1 bg-[#ee3c98]" />
              </span>

              <span className="text-xl font-semibold tracking-tighter">
                NEXUS
              </span>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              Estratégia, design e tecnologia conectados para construir
              experiências digitais que movem negócios.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                Navegação
              </span>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
                <a href="#servicos" className="hover:text-[#08eadb]">
                  Serviços
                </a>

                <a href="#projetos" className="hover:text-[#08eadb]">
                  Projetos
                </a>

                <a href="#processo" className="hover:text-[#08eadb]">
                  Processo
                </a>

                <a href="#contato" className="hover:text-[#08eadb]">
                  Contato
                </a>
              </div>
            </div>

            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                Nexus
              </span>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
                <span>Construir</span>
                <span>Crescer</span>
                <span>Otimizar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>Nexus / Experiências Digitais</span>

          <span>© 2026 Nexus</span>
        </div>
      </div>
    </footer>
  );
}
