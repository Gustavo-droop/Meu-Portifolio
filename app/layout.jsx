import "./globals.css";

export const metadata = {
  title: "gustavo.dev — Sites e Sistemas que Vendem por Você",
  description:
    "Desenvolvo sites profissionais, SaaS e automações sob medida para o seu negócio escalar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="grain">{children}</body>
    </html>
  );
}
