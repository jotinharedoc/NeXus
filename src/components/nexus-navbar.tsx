"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  {
    number: "01",
    label: "Serviços",
    href: "#servicos",
    id: "servicos",
  },
  {
    number: "02",
    label: "Projetos",
    href: "#projetos",
    id: "projetos",
  },
  {
    number: "03",
    label: "Processo",
    href: "#processo",
    id: "processo",
  },
  {
    number: "04",
    label: "Contato",
    href: "#contato",
    id: "contato",
  },
];

export default function NexusNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto max-w-300">
        <div className="relative flex h-16 items-center justify-between border border-white/10 bg-[#10182f]/80 px-4 backdrop-blur-md md:px-6">
          {/* assinatura Nexus */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-24 bg-[#08eadb]"
          />

          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-px w-16 bg-[#ee3c98]"
          />

          {/* MARCA */}
         <a
  href="#inicio"
  aria-label="Nexus - início"
  className="flex items-center"
>
  <Image
    src="/nexus-logo.png"
    alt="Nexus"
    width={150}
    height={52}
    priority
    className="h-auto w-24 object-contain md:w-28"
  />
</a>

          {/* DESKTOP */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 md:flex lg:gap-9"
          >
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-center gap-2 text-[13px] transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[9px] tracking-[0.16em] ${
                      isActive
                        ? "text-[#08eadb]"
                        : "text-white/20"
                    }`}
                  >
                    {link.number}
                  </span>

                  <span>{link.label}</span>

                  <span
                    className={`h-px bg-[#08eadb] transition-[width] duration-300 ${
                      isActive
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="#contato"
            className="group hidden items-center gap-4 border-l border-white/10 pl-5 text-[13px] font-medium text-white md:flex"
          >
            <span>Iniciar projeto</span>

            <span className="text-[#08eadb] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="nexus-mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1 block h-px w-5 bg-white transition-transform duration-200 ${
                  open
                    ? "translate-y-0.75 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute bottom-1 left-0 block h-px w-5 bg-white transition-transform duration-200 ${
                  open
                    ? "-translate-y-0.75 -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            id="nexus-mobile-menu"
            className="border-x border-b border-white/10 bg-[#10182f]/95 px-5 pb-5 pt-3 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((link, index) => {
                const isActive = active === link.id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-[9px] tracking-[0.18em] ${
                          isActive
                            ? "text-[#08eadb]"
                            : "text-white/25"
                        }`}
                      >
                        {link.number}
                      </span>

                      <span
                        className={`text-sm ${
                          isActive
                            ? "text-white"
                            : "text-white/65"
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>

                    <span
                      className={
                        index % 2 === 0
                          ? "text-[#08eadb]"
                          : "text-[#ee3c98]"
                      }
                    >
                      ↗
                    </span>
                  </a>
                );
              })}
            </nav>

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-between border border-white/10 px-4 py-3 text-sm text-white"
            >
              <span>Iniciar projeto</span>

              <span className="text-[#08eadb]">
                ↗
              </span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
