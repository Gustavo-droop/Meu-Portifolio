import Reveal from "./Reveal";
import { SectionLabel, SectionTitle, BodyText } from "./UI";
import { DS } from "@/styles/tokens";

const ITEMS = [
  { title: "Seu negócio mora no WhatsApp", desc: "Se o celular descarrega ou a internet cai, suas vendas param. Sem sistema, sem controle, sem escala." },
  { title: "Cada minuto de demora é um cliente perdido", desc: "Enquanto você digita uma resposta, o concorrente com agendamento automático já fechou o serviço." },
  { title: "Quem te procura no Google não encontra nada", desc: "Sem site profissional, o cliente desconfia. E desconfiança custa mais caro que qualquer investimento em tecnologia." },
];

export default function ProblemSection() {
  return (
    <section style={{ padding: DS.sectionPad, background: DS.bg }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel color={DS.red}>O problema real</SectionLabel>
          <SectionTitle>
            Você está perdendo dinheiro<br/>
            <em style={{ color: DS.red, fontStyle: "italic" }}>todo dia</em> sem perceber
          </SectionTitle>
        </Reveal>

        <div style={{ marginTop: DS.sectionGap }}>
          {ITEMS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                display: "flex", gap: DS.sp6, padding: `${DS.sp7}px 0`,
                borderTop: i === 0 ? `1px solid ${DS.border}` : "none",
                borderBottom: `1px solid ${DS.border}`,
                alignItems: "flex-start",
              }}>
                <span style={{
                  fontFamily: DS.fontDisplay, fontSize: DS.sp8, lineHeight: 1,
                  color: DS.red, opacity: .12, fontStyle: "italic", flexShrink: 0, width: 60,
                }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: DS.sp2, letterSpacing: "-.01em" }}>{p.title}</h3>
                  <BodyText style={{ maxWidth: 560 }}>{p.desc}</BodyText>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
