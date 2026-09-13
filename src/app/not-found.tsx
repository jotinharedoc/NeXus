import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nexus-container flex min-h-svh flex-col justify-center gap-6 py-24">
      <p className="text-sm text-[#08eadb]">Nexus / 404</p>
      <h1 className="text-4xl font-medium tracking-tighter md:text-6xl">Página não encontrada.</h1>
      <p className="text-white/70">O endereço pode ter mudado ou não estar mais disponível.</p>
      <Link href="/" className="w-fit border-b border-[#08eadb] py-3">Voltar ao início</Link>
    </main>
  );
}
