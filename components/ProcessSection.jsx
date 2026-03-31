"use client";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./UI";
import { DS } from "@/styles/tokens";

const STEPS = [
  { n: "01", title: "Conversa", desc: "Entendo seu negócio, público e o que você precisa resolver." },
  { n: "02", title: "Proposta", desc: "Escopo, prazo e investimento claros. Sem surpresas." },
  { n: "03", title: "Construção", desc: "Desenvolvo com atualizações semanais. Você acompanha tudo." },
  { n: "04", title: "Entrega", desc: "Site no ar, treinamento e suporte pós-lançamento incluso." },
];

export default function ProcessSection() {
  return (
    <section id="processo" style={{ padding: DS.sectionPad, background: DS.bg }}>
      <div style={{ maxWidth: DS.sectionMax, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Como funciona</SectionLabel>
          <SectionTitle>Do primeiro contato ao <em style={{ color: DS.green, fontStyle: "italic" }}>site no ar</em></SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{
          gap: 1, background: DS.border, borderRadius: DS.cardRadius, overflow: "hidden", marginTop: DS.sectionGap,
        }}>
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} style={{ display: "flex" }}>
              <div style={{
                background: DS.bg2, padding: "44px 32px", height: "100%", width: "100%",
                transition: "background .3s",
              }} onMouseEnter={e => e.currentTarget.style.background = DS.bg3}
                 onMouseLeave={e => e.currentTarget.style.background = DS.bg2}>
                <span style={{ fontFamily: DS.fontDisplay, fontSize: DS.sp7, color: DS.green, opacity: .15, display: "block", lineHeight: 1, marginBottom: DS.sp5 }}>{s.n}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: DS.sp2, letterSpacing: "-.01em" }}>{s.title}</h3>
                <p style={{ fontSize: DS.smallSize, color: DS.gray2, lineHeight: DS.bodyLineHeight }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
