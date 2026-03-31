import Reveal from "./Reveal";
import BrowserMockup from "./BrowserMockup";
import { SectionLabel, ButtonPrimary, ButtonSecondary, BodyText } from "./UI";
import { DS } from "@/styles/tokens";

export default function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "140px 32px 100px", position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse 50% 60% at 70% 30%, rgba(34,197,94,.03), transparent), ${DS.bg}`,
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: .025, pointerEvents: "none",
        backgroundImage: `linear-gradient(${DS.gray4} 1px, transparent 1px), linear-gradient(90deg, ${DS.gray4} 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
        mask: "radial-gradient(ellipse 70% 60% at 60% 40%, black, transparent)",
        WebkitMask: "radial-gradient(ellipse 70% 60% at 60% 40%, black, transparent)",
      }}/>

      <div className="flex items-center gap-20 max-w-[1200px] w-full flex-col lg:flex-row">
        <div className="flex-1 max-w-[560px] text-center lg:text-left">
          <Reveal><SectionLabel>Sites &amp; Sistemas para Negócios Locais</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 style={{
              fontFamily: DS.fontDisplay, fontSize: "clamp(40px, 5.5vw, 68px)",
              lineHeight: 1.0, letterSpacing: "-.04em", fontWeight: 400, marginBottom: DS.sp5,
            }}>
              Seu negócio lotado<br/>
              <em style={{ fontStyle: "italic", color: DS.green }}>sem depender de indicação</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <BodyText style={{ maxWidth: 460, marginBottom: DS.sp7 }}>
              Desenvolvo sites, sistemas e automações sob medida 
              para negócios que querem parar de perder clientes
              no WhatsApp e começar a faturar de forma automática.
            </BodyText>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ display: "flex", gap: DS.gapCards, flexWrap: "wrap", justifyContent: "inherit" }}>
              <ButtonPrimary href="#cta">Quero meu site profissional</ButtonPrimary>
              <ButtonSecondary href="#portfolio">Ver projeto ao vivo</ButtonSecondary>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="flex-1 max-w-[520px] w-full">
          <div style={{ transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)" }}>
            <BrowserMockup variant="full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
