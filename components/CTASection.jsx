import Reveal from "./Reveal";
import { BodyText, ButtonPrimary, WhatsAppIcon } from "./UI";
import { DS, WA_LINK } from "@/styles/tokens";

export default function CTASection() {
  return (
    <section id="cta" style={{ padding: DS.sectionPad, position: "relative", overflow: "hidden", background: DS.bg2 }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${DS.greenSoft}, transparent)` }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: DS.sp10, height: 1, background: `linear-gradient(90deg, transparent, ${DS.green}, transparent)` }} />

      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <Reveal>
          <p style={{
            fontFamily: DS.fontDisplay, fontSize: "clamp(36px, 5.5vw, 60px)",
            fontWeight: 400, lineHeight: 1.05, letterSpacing: DS.titleTracking, marginBottom: DS.sp5,
          }}>
            Pronto pra ter um site que<br/>
            <em style={{ background: `linear-gradient(135deg, ${DS.orange}, #fdba74)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>trabalha por você?</em>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <BodyText style={{ fontSize: 17, marginBottom: DS.sp7 }}>
            Me conta o que seu negócio precisa. Em até 24h te envio uma proposta
            com escopo, prazo e investimento — sem enrolação, sem compromisso.
          </BodyText>
        </Reveal>
        <Reveal delay={0.2}>
          <ButtonPrimary href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ padding: "20px 48px", borderRadius: DS.sp4, fontSize: 17 }}>
            <WhatsAppIcon /> Chamar no WhatsApp
          </ButtonPrimary>
        </Reveal>
      </div>
    </section>
  );
}
