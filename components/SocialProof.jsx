import Reveal from "./Reveal";
import { DS } from "@/styles/tokens";

export default function SocialProof() {
  return (
    <section style={{ padding: "120px 32px", background: DS.bg2 }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: `0 auto ${DS.sp6}px`, opacity: .15 }}>
            <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke={DS.white} strokeWidth="1.5"/>
            <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke={DS.white} strokeWidth="1.5"/>
          </svg>
          <blockquote style={{
            fontFamily: DS.fontDisplay, fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 400, lineHeight: 1.5, letterSpacing: "-.01em",
            fontStyle: "italic", marginBottom: DS.sp6, color: DS.gray1,
          }}>
            Antes eu perdia cliente porque demorava pra responder. Agora o sistema
            agenda sozinho e eu só confirmo. Mudou meu negócio completamente.
          </blockquote>
          <div style={{ fontSize: DS.buttonFontSize, fontWeight: 700 }}>Primeiro cliente Agendio</div>
          <div style={{ fontSize: 13, color: DS.gray3, marginTop: DS.sp1 }}>Barbearia · São Paulo</div>
        </Reveal>
      </div>
    </section>
  );
}
