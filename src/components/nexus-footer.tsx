import Image from "next/image";

export default function NexusFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#10182f] px-4 pb-8 pt-16 text-white md:px-8 md:pb-10 md:pt-20">
      <div className="absolute left-0 top-0 h-px w-1/3 bg-[#08eadb]" />
      <div className="absolute right-0 top-0 h-px w-1/4 bg-[#ee3c98]" />

      <div className="mx-auto max-w-300">
        <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Image src="/nexus-logo.png" alt="Nexus" width={600} height={209} sizes="(max-width: 768px) 65vw, 360px" className="h-auto w-64 max-w-full md:w-90" />

            <p className="mt-8 max-w-md text-base leading-7 text-white/65">
              Produtos digitais que movem negócios.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                Navegação
              </span>

              <div className="mt-5 flex flex-col gap-4 text-base text-white/75">
                <a href="#servicos" className="hover:text-[#08eadb]">
                  Serviços
                </a>

                <a href="#planos" className="hover:text-[#08eadb]">
                  Planos
                </a>

                <a href="#projetos" className="hover:text-[#08eadb]">
                  Projetos
                </a>

                <a href="#contato" className="hover:text-[#08eadb]">
                  Contato
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                Nexus
              </span>

              <div className="mt-5 flex flex-col gap-4 text-base text-white/75">
                <span>Construir</span>
                <span>Crescer</span>
                <span>Otimizar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[0.18em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>Nexus / Experiências Digitais</span>

          <span>© 2026 Nexus</span>
        </div>
      </div>
    </footer>
  );
}
