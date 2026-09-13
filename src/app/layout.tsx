import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus — Experiências Digitais",
  description:
    "Produtos digitais, tecnologia, crescimento e automação para negócios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
