"use client";
import Reveal from "./Reveal";
import BrowserMockup from "./BrowserMockup";
import { SectionLabel, SectionTitle, BodyText, Tag, Card, ArrowIcon } from "./UI";
import { DS } from "@/styles/tokens";

export default function PortfolioSection() {
  return (
    <section id="portfolio" style={{ padding: DS.sectionPad, background: DS.bg }}>
      <div style={{ maxWidth: DS.sectionMax, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Trabalho real</SectionLabel>
          <SectionTitle>Projetos que estão <em style={{ color: DS.green, fontStyle: "italic" }}>no ar agora</em></SectionTitle>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col lg:flex-row" style={{
            borderRadius: DS.cardRadius + 4, overflow: "hidden",
            border: `1px solid ${DS.greenBorder}`,
            marginTop: DS.sectionGap, marginBottom: DS.sp7, background: DS.bg2,
          }}>
            <div className="flex-1 lg:max-w-[55%]" style={{ padding: DS.sp6, background: `linear-gradient(160deg, ${DS.greenSoft}, transparent)` }}>
              <div style={{ boxShadow: "0 24px 64px rgba(0,0,0,.4)" }}>
                <BrowserMockup variant="compact" />
              </div>
            </div>
            <div className="flex-1 lg:max-w-[45%] flex flex-col justify-center" style={{ padding: DS.sp7 }}>
              <span style={{ fontSize: DS.tagSize, fontWeight: DS.tagWeight, color: DS.green, letterSpacing: "2px", textTransform: "uppercase", marginBottom: DS.sp3 }}>Projeto em produção</span>
              <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 36, fontWeight: 400, marginBottom: DS.sp4, letterSpacing: "-.02em" }}>Agendio</h3>
              <BodyText style={{ marginBottom: DS.sp5 }}>
                Plataforma SaaS multi-tenant de agendamento para barbearias, salões e clínicas. Cada negócio tem seu painel, seus horários, seus clientes. React + Supabase.
              </BodyText>
              <div style={{ display: "flex", gap: DS.gapTags, flexWrap: "wrap", marginBottom: DS.sp5 }}>
                {["React","Supabase","RLS","Multi-tenant","Netlify"].map(t => <Tag key={t} variant="muted">{t}</Tag>)}
              </div>
              <a href="https://agendio-adm.netlify.app" target="_blank" rel="noopener noreferrer" style={{
                fontSize: DS.smallSize, fontWeight: DS.buttonWeight, color: DS.green, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 6, transition: "gap .3s",
              }} onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                 onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
                Ver projeto ao vivo <ArrowIcon />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: DS.gapCards }}>
            {[
              { title: "Projeto para clínica de estética", status: "Em desenvolvimento" },
              { title: "Dashboard para personal trainers", status: "Em planejamento" },
            ].map(p => (
              <Card key={p.title} padding={`${DS.sp6}px ${DS.sp5}px`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h4 style={{ fontSize: DS.bodySize, fontWeight: 700, marginBottom: DS.sp1 }}>{p.title}</h4>
                  <span style={{ fontSize: DS.sp3, color: DS.gray3 }}>{p.status}</span>
                </div>
                <Tag variant="orange">Em breve</Tag>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
