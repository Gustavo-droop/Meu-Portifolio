import "./globals.css";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "gustavo.dev — Sites e Sistemas que Vendem por Você",
  description:
    "Desenvolvo sites profissionais, SaaS e automações sob medida para o seu negócio escalar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={instrumentSerif.variable}>
      <body className="grain">{children}</body>
    </html>
  );
}
