"use client";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle, BodyText, Tag, Card } from "./UI";
import { DS } from "@/styles/tokens";

export default function ServicesSection() {
  return (
    <section id="servicos" style={{ padding: DS.sectionPad, background: DS.bg2 }}>
      <div style={{ maxWidth: DS.sectionMax, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>O que eu faço</SectionLabel>
          <SectionTitle>Três coisas, <em style={{ color: DS.green, fontStyle: "italic" }}>muito bem feitas</em></SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr]" style={{ gap: DS.gapCards, marginTop: DS.sectionGap }}>
          <Reveal>
            <Card highlight padding="48px 40px" style={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 0 60px rgba(34,197,94,.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: DS.sp2, marginBottom: DS.sp5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: DS.green }}/>
                <span style={{ fontSize: DS.tagSize, fontWeight: DS.tagWeight, color: DS.green, letterSpacing: "2px", textTransform: "uppercase" }}>Serviço principal</span>
              </div>
              <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 32, fontWeight: 400, marginBottom: DS.sp4, letterSpacing: "-.02em", lineHeight: 1.1 }}>Sites &<br/>Landing Pages</h3>
              <BodyText style={{ flex: 1, marginBottom: DS.sp5 }}>
                Páginas de vendas, sites institucionais e landing pages construídas do zero com código limpo, design estratégico e foco em converter visitante em cliente.
              </BodyText>
              <div style={{ display: "flex", gap: DS.gapTags, flexWrap: "wrap" }}>
                {["React / Next.js","Tailwind CSS","SEO Técnico","Mobile-first"].map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          </Reveal>

          {[
            { title: "Sistemas SaaS", desc: "Plataformas completas com painel admin, autenticação, pagamentos recorrentes e multi-tenancy.", tags: ["Supabase","API REST","Dashboard"] },
            { title: "Automação", desc: "Chatbots, agendamento automático e integrações que fazem seu negócio funcionar 24/7.", tags: ["WhatsApp","N8N","Webhooks"] },
          ].map((s, i) => (
            <Reveal key={i} delay={(i + 1) * 0.1}>
              <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = DS.borderHover; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = DS.cardBorder; e.currentTarget.style.transform = "translateY(0)"; }}>
                <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 26, fontWeight: 400, marginBottom: DS.sp4, letterSpacing: "-.02em" }}>{s.title}</h3>
                <BodyText style={{ flex: 1, marginBottom: DS.sp5 }}>{s.desc}</BodyText>
                <div style={{ display: "flex", gap: DS.gapTags, flexWrap: "wrap" }}>
                  {s.tags.map(t => <Tag key={t} variant="muted">{t}</Tag>)}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
