export default function NexusContact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#f4f5f7] px-4 py-24 text-[#10182f] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-300">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rotate-45 border border-[#ee3c98]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#10182f]/40 md:text-xs">
                Contato / 04
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Tem um
              <br />
              projeto?
              <br />

              <span className="nexus-serif font-light italic text-[#1d315c]">
                Vamos construir.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#10182f]/50 md:text-base">
              Conte o que precisa existir, o que precisa melhorar ou o problema
              que sua empresa precisa resolver.
            </p>
          </div>

          <div className="border-t border-[#10182f]/15 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-[0.2em] text-[#10182f]/40"
                >
                  Seu nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  className="mt-3 w-full border-b border-[#10182f]/20 bg-transparent py-4 text-base text-[#10182f] outline-none transition-colors placeholder:text-[#10182f]/25 focus:border-[#08a99f]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[10px] uppercase tracking-[0.2em] text-[#10182f]/40"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  className="mt-3 w-full border-b border-[#10182f]/20 bg-transparent py-4 text-base text-[#10182f] outline-none transition-colors placeholder:text-[#10182f]/25 focus:border-[#08a99f]"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="text-[10px] uppercase tracking-[0.2em] text-[#10182f]/40"
                >
                  Projeto
                </label>

                <textarea
                  id="project"
                  name="project"
                  rows={5}
                  placeholder="Conta pra gente o que você está pensando."
                  className="mt-3 w-full resize-none border-b border-[#10182f]/20 bg-transparent py-4 text-base leading-7 text-[#10182f] outline-none transition-colors placeholder:text-[#10182f]/25 focus:border-[#ee3c98]"
                />
              </div>

              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="max-w-xs text-xs leading-5 text-[#10182f]/35">
                  O envio por e-mail será conectado na etapa de integração.
                </span>

                <button
                  type="button"
                  className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#10182f] px-6 py-3.5 text-sm font-medium text-white"
                >
                  <span>Enviar briefing</span>

                  <span className="text-[#08eadb] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
