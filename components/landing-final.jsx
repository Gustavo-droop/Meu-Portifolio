import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════
   DESIGN SYSTEM
   Single source of truth for every visual decision.
   ═══════════════════════════════════════════════════════ */

const DS = {
  /* ── Color ── */
  bg:          "#08080A",
  bg2:         "#0e0e12",
  bg3:         "#141418",
  bg4:         "#1c1c22",
  green:       "#22C55E",
  greenSoft:   "rgba(34,197,94,.07)",
  greenBorder: "rgba(34,197,94,.12)",
  orange:      "#F97316",
  orangeGlow:  "rgba(249,115,22,.18)",
  red:         "#EF4444",
  redSoft:     "rgba(239,68,68,.06)",
  white:       "#F5F5F7",
  gray1:       "#E5E5EA",
  gray2:       "#A1A1AA",
  gray3:       "#71717A",
  gray4:       "#3f3f46",
  border:      "rgba(255,255,255,.05)",
  borderHover: "rgba(255,255,255,.08)",

  /* ── Spacing (4px base) ── */
  sp1: 4, sp2: 8, sp3: 12, sp4: 16, sp5: 24, sp6: 32, sp7: 48, sp8: 64, sp9: 80, sp10: 160,

  /* ── Section ── */
  sectionPad:      "160px 32px",
  sectionMax:      1100,
  sectionGap:      80,      // between header and content

  /* ── Typography ── */
  fontBody:        "'Satoshi', -apple-system, sans-serif",
  fontDisplay:     "'Instrument Serif', Georgia, serif",
  labelSize:       12,
  labelWeight:     700,
  labelTracking:   "3px",
  titleSize:       "clamp(32px, 4.5vw, 52px)",
  titleWeight:     400,
  titleTracking:   "-.03em",
  titleLineHeight: 1.05,
  bodySize:        16,
  bodyLineHeight:  1.75,
  smallSize:       14,

  /* ── Components ── */
  cardRadius:      20,
  cardPadding:     "40px 36px",
  cardBorder:      "rgba(255,255,255,.05)",
  buttonRadius:    12,
  buttonPadLg:     "16px 36px",
  buttonPadSm:     "10px 24px",
  buttonFontSize:  15,
  buttonWeight:    700,
  tagRadius:       8,
  tagPad:          "6px 14px",
  tagSize:         11,
  tagWeight:       700,
  tagTracking:     ".5px",

  /* ── Gaps ── */
  gapCards:        16,
  gapTags:         8,
  gapInline:       24,
};

const WA = "https://wa.me/5500000000000?text=Olá! Vim pelo site e gostaria de um orçamento.";

/* ═══════════════════════════════════════════════════════
   BASE STYLES
   ═══════════════════════════════════════════════════════ */

const Tag = ({ children, variant = "green" }) => {
  const styles = {
    green: { color: DS.green, background: DS.greenSoft },
    muted: { color: DS.gray3, background: "rgba(255,255,255,.03)", border: `1px solid ${DS.border}` },
    orange: { color: DS.orange, background: "rgba(249,115,22,.08)" },
  };
  return (
    <span style={{
      fontSize: DS.tagSize, fontWeight: DS.tagWeight, letterSpacing: DS.tagTracking,
      borderRadius: DS.tagRadius, padding: DS.tagPad,
      display: "inline-block",
      ...styles[variant],
    }}>{children}</span>
  );
};

const SectionLabel = ({ children, color = DS.green }) => (
  <p style={{
    fontSize: DS.labelSize, fontWeight: DS.labelWeight,
    letterSpacing: DS.labelTracking, textTransform: "uppercase",
    color, marginBottom: DS.sp5,
    display: "flex", alignItems: "center", gap: DS.sp3,
  }}>
    <span style={{ display: "inline-block", width: 32, height: 1, background: color }} />
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2 style={{
    fontFamily: DS.fontDisplay, fontSize: DS.titleSize, fontWeight: DS.titleWeight,
    lineHeight: DS.titleLineHeight, letterSpacing: DS.titleTracking,
  }}>{children}</h2>
);

const BodyText = ({ children, style = {} }) => (
  <p style={{
    fontSize: DS.bodySize, color: DS.gray2, lineHeight: DS.bodyLineHeight,
    ...style,
  }}>{children}</p>
);

const ButtonPrimary = ({ children, href, ...props }) => (
  <a href={href} {...props} style={{
    display: "inline-flex", alignItems: "center", gap: DS.sp3,
    background: DS.orange, color: "#fff",
    padding: DS.buttonPadLg, borderRadius: DS.buttonRadius,
    fontSize: DS.buttonFontSize, fontWeight: DS.buttonWeight,
    textDecoration: "none", letterSpacing: ".01em",
    boxShadow: `0 4px 24px ${DS.orangeGlow}`,
    transition: "all .35s cubic-bezier(.22,1,.36,1)",
    ...props.style,
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${DS.orangeGlow}`; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 24px ${DS.orangeGlow}`; }}
  >{children}</a>
);

const ButtonSecondary = ({ children, href, ...props }) => (
  <a href={href} {...props} style={{
    display: "inline-flex", alignItems: "center",
    border: `1px solid ${DS.borderHover}`, color: DS.gray2,
    padding: DS.buttonPadLg, borderRadius: DS.buttonRadius,
    fontSize: DS.buttonFontSize, fontWeight: 600,
    textDecoration: "none",
    transition: "all .3s cubic-bezier(.22,1,.36,1)",
    ...props.style,
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = DS.gray4; e.currentTarget.style.color = DS.white; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = DS.borderHover; e.currentTarget.style.color = DS.gray2; }}
  >{children}</a>
);

const Card = ({ children, padding = DS.cardPadding, highlight = false, style = {}, ...props }) => (
  <div {...props} style={{
    background: highlight ? `linear-gradient(160deg, ${DS.greenSoft}, ${DS.bg3})` : DS.bg3,
    border: `1px solid ${highlight ? DS.greenBorder : DS.cardBorder}`,
    borderRadius: DS.cardRadius,
    padding,
    transition: "all .4s cubic-bezier(.22,1,.36,1)",
    ...style,
  }}>{children}</div>
);

/* ═══════════════════════════════════════════════════════
   HOOK + REVEAL
   ═══════════════════════════════════════════════════════ */

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, v];
}

function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(36px)",
      transition: `opacity .85s cubic-bezier(.22,1,.36,1) ${delay}s, transform .85s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* ═══════════════════════════════════════════════════════
   GLOBAL CSS
   ═══════════════════════════════════════════════════════ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Satoshi:wght@400;500;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:${DS.bg};color:${DS.white};font-family:${DS.fontBody};-webkit-font-smoothing:antialiased;overflow-x:hidden;line-height:1.6}
::selection{background:${DS.green};color:${DS.bg}}

.grain::after{content:'';position:fixed;inset:0;z-index:9999;pointer-events:none;opacity:.025;
background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}

.browser{background:${DS.bg3};border:1px solid ${DS.borderHover};border-radius:14px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.03)}
.browser-bar{height:36px;background:${DS.bg2};border-bottom:1px solid ${DS.border};display:flex;align-items:center;padding:0 14px;gap:7px}
.browser-dot{width:9px;height:9px;border-radius:50%;background:${DS.gray4}}
.browser-url{margin-left:12px;background:rgba(255,255,255,.04);border-radius:6px;padding:3px 14px;font-size:${DS.tagSize}px;color:${DS.gray3};flex:1;max-width:260px}
.browser-body{padding:${DS.sp5}px}

::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:${DS.bg}}
::-webkit-scrollbar-thumb{background:${DS.gray4};border-radius:3px}

@media(max-width:900px){
  .hero-grid{flex-direction:column !important;text-align:center !important}
  .hero-grid>*{max-width:100% !important}
  .hero-mockup{max-width:420px !important;margin:0 auto !important}
  .services-grid{grid-template-columns:1fr !important}
  .service-main{grid-column:1 !important}
  .portfolio-featured{flex-direction:column !important}
  .portfolio-featured>*{max-width:100% !important}
  .process-grid{grid-template-columns:1fr 1fr !important}
  .upcoming-grid{grid-template-columns:1fr !important}
  .hide-m{display:none !important}
  .show-m{display:flex !important}
}
@media(min-width:901px){.show-m{display:none !important}}
`;

/* ═══════════════════════════════════════════════════════
   WHATSAPP ICON (reused in nav mobile + CTA)
   ═══════════════════════════════════════════════════════ */
const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
);

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [["Serviços","#servicos"],["Trabalho","#portfolio"],["Processo","#processo"]];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 72,
      display: "flex", alignItems: "center", justifyContent: "center", padding: `0 ${DS.sp6}px`,
      background: scrolled ? "rgba(8,8,10,.82)" : "transparent",
      backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
      borderBottom: scrolled ? `1px solid ${DS.border}` : "1px solid transparent",
      transition: "all .5s cubic-bezier(.22,1,.36,1)",
    }}>
      <div style={{ maxWidth: 1280, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: DS.sp3 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `linear-gradient(135deg, ${DS.green}, #16a34a)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: DS.fontDisplay, fontWeight: 700, fontSize: 17, color: DS.bg,
          }}>G</div>
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-.02em", color: DS.white }}>
            gustavo<span style={{ color: DS.green }}>.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hide-m" style={{ display: "flex", alignItems: "center", gap: DS.sp6 + 4 }}>
          {links.map(([l,h]) => (
            <a key={h} href={h} style={{
              color: DS.gray2, textDecoration: "none", fontSize: DS.smallSize, fontWeight: 500,
              transition: "color .3s",
            }} onMouseEnter={e => e.target.style.color = DS.white}
               onMouseLeave={e => e.target.style.color = DS.gray2}>{l}</a>
          ))}
          <a href="#cta" style={{
            background: DS.white, color: DS.bg,
            padding: DS.buttonPadSm, borderRadius: DS.buttonRadius,
            fontSize: 13, fontWeight: DS.buttonWeight,
            textDecoration: "none", transition: "all .3s",
          }} onMouseEnter={e => e.target.style.background = DS.green}
             onMouseLeave={e => e.target.style.background = DS.white}>Falar comigo</a>
        </div>

        {/* Mobile toggle */}
        <button className="show-m" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: DS.white, cursor: "pointer", padding: DS.sp2 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute", top: 72, left: 0, right: 0,
          background: "rgba(8,8,10,.97)", backdropFilter: "blur(32px)",
          borderBottom: `1px solid ${DS.border}`,
          padding: `${DS.sp5}px ${DS.sp6}px`, display: "flex", flexDirection: "column", gap: DS.sp5,
        }}>
          {links.map(([l,h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{
              color: DS.gray1, textDecoration: "none", fontSize: DS.bodySize, fontWeight: 500,
            }}>{l}</a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} style={{
            background: DS.orange, color: "#fff",
            padding: DS.buttonPadLg, borderRadius: DS.buttonRadius,
            fontSize: DS.buttonFontSize, fontWeight: DS.buttonWeight,
            textDecoration: "none", textAlign: "center",
          }}>Falar comigo</a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   BROWSER MOCKUP
   ═══════════════════════════════════════════════════════ */

function BrowserMockup({ variant = "full" }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <div className="browser-dot"/><div className="browser-dot"/><div className="browser-dot"/>
        <div className="browser-url">agendio-adm.netlify.app</div>
      </div>
      <div className="browser-body" style={{ background: "#0f1117" }}>
        {variant === "full" ? <MockupFull /> : <MockupCompact />}
      </div>
    </div>
  );
}

function MockupFull() {
  return (
    <>
      <div style={{ marginBottom: DS.sp4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: DS.tagSize, color: DS.gray3, fontWeight: DS.tagWeight, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: DS.sp1 }}>Painel do Negócio</div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>Barbearia Style</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${DS.green}, #16a34a)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: DS.bodySize, fontWeight: 800, color: DS.bg }}>A</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: DS.sp3, marginBottom: DS.sp4 }}>
        {[["32","Agendamentos"],["R$ 2.4k","Faturamento"],["94%","Confirmação"]].map(([n,l]) => (
          <div key={l} style={{ background: "rgba(255,255,255,.04)", borderRadius: 10, padding: `${DS.sp3}px ${DS.sp3}px`, border: "1px solid rgba(255,255,255,.04)" }}>
            <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 10, color: DS.gray3, marginTop: DS.sp1, fontWeight: 500 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: DS.tagSize, color: DS.gray3, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: DS.sp2 }}>Hoje — 28 Mar</div>
      {[
        { time: "09:00", name: "Carlos M.", svc: "Corte + Barba", st: "Confirmado" },
        { time: "10:30", name: "Rafael S.", svc: "Corte Degradê", st: "Pendente" },
        { time: "14:00", name: "Lucas P.", svc: "Barba", st: "Confirmado" },
      ].map((a, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: `${DS.sp3}px ${DS.sp3}px`, borderRadius: DS.sp2, marginBottom: 6,
          background: i === 0 ? "rgba(34,197,94,.06)" : "rgba(255,255,255,.02)",
          border: `1px solid ${i === 0 ? "rgba(34,197,94,.1)" : "rgba(255,255,255,.03)"}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: DS.sp3 }}>
            <span style={{ fontSize: DS.sp3, fontWeight: 700, color: DS.gray2, fontVariantNumeric: "tabular-nums", width: 36 }}>{a.time}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{a.name}</div>
              <div style={{ fontSize: DS.tagSize, color: DS.gray3 }}>{a.svc}</div>
            </div>
          </div>
          <span style={{
            fontSize: 10, fontWeight: DS.tagWeight, padding: "3px 10px", borderRadius: 100,
            background: a.st === "Confirmado" ? "rgba(34,197,94,.1)" : "rgba(249,115,22,.1)",
            color: a.st === "Confirmado" ? DS.green : DS.orange,
            letterSpacing: DS.tagTracking, textTransform: "uppercase",
          }}>{a.st}</span>
        </div>
      ))}
    </>
  );
}

function MockupCompact() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: DS.sp4 }}>
        <div style={{ fontSize: DS.bodySize, fontWeight: 800 }}>Agendio</div>
        <Tag variant="green">ATIVO</Tag>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: DS.sp2, marginBottom: DS.sp4 }}>
        {[["18","Hoje"],["R$ 1.2k","Semana"]].map(([n,l]) => (
          <div key={l} style={{ background: "rgba(255,255,255,.03)", borderRadius: DS.sp2, padding: `${DS.sp3}px ${DS.sp3}px`, border: "1px solid rgba(255,255,255,.03)" }}>
            <div style={{ fontSize: DS.bodySize, fontWeight: 800, lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 9, color: DS.gray3, marginTop: 3 }}>{l}</div>
          </div>
        ))}
      </div>
      {["09:00 — Carlos M. · Corte","10:30 — Ana R. · Unha","14:00 — Pedro L. · Barba"].map((t, i) => (
        <div key={i} style={{
          fontSize: DS.sp3, color: DS.gray2, padding: `${DS.sp2}px ${DS.sp3}px`, borderRadius: 6, marginBottom: DS.sp1,
          background: i === 0 ? "rgba(34,197,94,.05)" : "transparent",
          borderLeft: i === 0 ? `2px solid ${DS.green}` : "2px solid transparent",
        }}>{t}</div>
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "140px 32px 100px", position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse 50% 60% at 70% 30%, rgba(34,197,94,.03), transparent), ${DS.bg}`,
    }}>
      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: .025, pointerEvents: "none",
        backgroundImage: `linear-gradient(${DS.gray4} 1px, transparent 1px), linear-gradient(90deg, ${DS.gray4} 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
        mask: "radial-gradient(ellipse 70% 60% at 60% 40%, black, transparent)",
        WebkitMask: "radial-gradient(ellipse 70% 60% at 60% 40%, black, transparent)",
      }}/>

      <div className="hero-grid" style={{ maxWidth: 1200, width: "100%", display: "flex", alignItems: "center", gap: DS.sp9 }}>
        {/* Text */}
        <div style={{ flex: "1 1 50%", maxWidth: 560 }}>
          <Reveal>
            <SectionLabel>Desenvolvedor Full-Stack</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 style={{
              fontFamily: DS.fontDisplay,
              fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.0,
              letterSpacing: "-.04em", fontWeight: 400, marginBottom: DS.sp5,
            }}>
              Construo sites que<br/>
              <em style={{ fontStyle: "italic", color: DS.green }}>vendem de verdade</em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <BodyText style={{ maxWidth: 460, marginBottom: DS.sp7 }}>
              Sites, sistemas SaaS e automações sob medida para negócios que
              querem parar de depender só do WhatsApp e começar a escalar.
            </BodyText>
          </Reveal>

          <Reveal delay={0.24}>
            <div style={{ display: "flex", gap: DS.gapCards, flexWrap: "wrap" }}>
              <ButtonPrimary href="#cta">Solicitar orçamento</ButtonPrimary>
              <ButtonSecondary href="#portfolio">Ver meu trabalho</ButtonSecondary>
            </div>
          </Reveal>
        </div>

        {/* Mockup */}
        <Reveal delay={0.2} className="hero-mockup" style={{ flex: "1 1 45%", maxWidth: 520 }}>
          <div style={{ transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)" }}>
            <BrowserMockup variant="full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROBLEM
   ═══════════════════════════════════════════════════════ */

function ProblemSection() {
  const items = [
    { title: "Seu negócio mora no WhatsApp", desc: "Se o celular descarrega ou a internet cai, suas vendas param. Sem sistema, sem controle, sem escala." },
    { title: "Cada minuto de demora é um cliente perdido", desc: "Enquanto você digita uma resposta, o concorrente com agendamento automático já fechou o serviço." },
    { title: "Quem te procura no Google não encontra nada", desc: "Sem site profissional, o cliente desconfia. E desconfiança custa mais caro que qualquer investimento em tecnologia." },
  ];

  return (
    <section style={{ padding: DS.sectionPad, background: DS.bg }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel color={DS.red}>O problema real</SectionLabel>
          <SectionTitle>
            Você está perdendo dinheiro<br/><em style={{ color: DS.red, fontStyle: "italic" }}>todo dia</em> sem perceber
          </SectionTitle>
        </Reveal>

        <div style={{ marginTop: DS.sectionGap }}>
          {items.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                display: "flex", gap: DS.sp6, padding: `${DS.sp7}px 0`,
                borderTop: i === 0 ? `1px solid ${DS.border}` : "none",
                borderBottom: `1px solid ${DS.border}`,
                alignItems: "flex-start",
              }}>
                <span style={{
                  fontFamily: DS.fontDisplay, fontSize: DS.sp8, lineHeight: 1,
                  color: DS.red, opacity: .12, fontStyle: "italic",
                  flexShrink: 0, width: 60,
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

/* ═══════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════ */

function ServicesSection() {
  return (
    <section id="servicos" style={{ padding: DS.sectionPad, background: DS.bg2 }}>
      <div style={{ maxWidth: DS.sectionMax, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>O que eu faço</SectionLabel>
          <SectionTitle>
            Três coisas, <em style={{ color: DS.green, fontStyle: "italic" }}>muito bem feitas</em>
          </SectionTitle>
        </Reveal>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: DS.gapCards, marginTop: DS.sectionGap }}>
          {/* Main service */}
          <Reveal>
            <Card highlight padding="48px 40px" style={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: `0 0 60px rgba(34,197,94,.04)` }}>
              <div style={{ display: "flex", alignItems: "center", gap: DS.sp2, marginBottom: DS.sp5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: DS.green }}/>
                <span style={{ fontSize: DS.tagSize, fontWeight: DS.tagWeight, color: DS.green, letterSpacing: "2px", textTransform: "uppercase" }}>
                  Serviço principal
                </span>
              </div>
              <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 32, fontWeight: 400, marginBottom: DS.sp4, letterSpacing: "-.02em", lineHeight: 1.1 }}>
                Sites &<br/>Landing Pages
              </h3>
              <BodyText style={{ flex: 1, marginBottom: DS.sp5 }}>
                Páginas de vendas, sites institucionais e landing pages construídas do zero com
                código limpo, design estratégico e foco em converter visitante em cliente.
              </BodyText>
              <div style={{ display: "flex", gap: DS.gapTags, flexWrap: "wrap" }}>
                {["React / Next.js", "Tailwind CSS", "SEO Técnico", "Mobile-first"].map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          </Reveal>

          {/* Secondary */}
          {[
            { title: "Sistemas SaaS", desc: "Plataformas completas com painel admin, autenticação, pagamentos recorrentes e multi-tenancy.", tags: ["Supabase", "API REST", "Dashboard"] },
            { title: "Automação", desc: "Chatbots, agendamento automático e integrações que fazem seu negócio funcionar 24/7.", tags: ["WhatsApp", "N8N", "Webhooks"] },
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

/* ═══════════════════════════════════════════════════════
   PORTFOLIO
   ═══════════════════════════════════════════════════════ */

function PortfolioSection() {
  return (
    <section id="portfolio" style={{ padding: DS.sectionPad, background: DS.bg }}>
      <div style={{ maxWidth: DS.sectionMax, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Trabalho real</SectionLabel>
          <SectionTitle>
            Projetos que estão <em style={{ color: DS.green, fontStyle: "italic" }}>no ar agora</em>
          </SectionTitle>
        </Reveal>

        {/* Featured case */}
        <Reveal delay={0.1}>
          <div className="portfolio-featured" style={{
            display: "flex", gap: 0, borderRadius: DS.cardRadius + 4, overflow: "hidden",
            border: `1px solid ${DS.greenBorder}`, marginTop: DS.sectionGap, marginBottom: DS.sp7,
            background: DS.bg2,
          }}>
            <div style={{ flex: "1 1 55%", maxWidth: "55%", padding: DS.sp6, background: `linear-gradient(160deg, ${DS.greenSoft}, transparent)` }}>
              <div style={{ boxShadow: "0 24px 64px rgba(0,0,0,.4)" }}>
                <BrowserMockup variant="compact" />
              </div>
            </div>
            <div style={{ flex: "1 1 45%", maxWidth: "45%", padding: DS.sp7, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: DS.tagSize, fontWeight: DS.tagWeight, color: DS.green, letterSpacing: "2px", textTransform: "uppercase", marginBottom: DS.sp3 }}>Projeto em produção</span>
              <h3 style={{ fontFamily: DS.fontDisplay, fontSize: 36, fontWeight: 400, marginBottom: DS.sp4, letterSpacing: "-.02em" }}>Agendio</h3>
              <BodyText style={{ marginBottom: DS.sp5 }}>
                Plataforma SaaS multi-tenant de agendamento para barbearias, salões e clínicas.
                Cada negócio tem seu painel, seus horários, seus clientes. React + Supabase.
              </BodyText>
              <div style={{ display: "flex", gap: DS.gapTags, flexWrap: "wrap", marginBottom: DS.sp5 }}>
                {["React", "Supabase", "RLS", "Multi-tenant", "Netlify"].map(t => <Tag key={t} variant="muted">{t}</Tag>)}
              </div>
              <a href="https://agendio-adm.netlify.app" target="_blank" rel="noopener noreferrer" style={{
                fontSize: DS.smallSize, fontWeight: DS.buttonWeight, color: DS.green, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "gap .3s",
              }} onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                 onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
                Ver projeto ao vivo <ArrowIcon />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Upcoming */}
        <Reveal delay={0.2}>
          <div className="upcoming-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: DS.gapCards }}>
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

/* ═══════════════════════════════════════════════════════
   SOCIAL PROOF
   ═══════════════════════════════════════════════════════ */

function SocialProof() {
  return (
    <section style={{ padding: "120px 32px", background: DS.bg2 }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: `0 auto ${DS.sp6}px`, opacity: .15 }}>
            <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke={DS.white} strokeWidth="1.5"/>
            <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke={DS.white} strokeWidth="1.5"/>
          </svg>
          <blockquote style={{
            fontFamily: DS.fontDisplay,
            fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, lineHeight: 1.5,
            letterSpacing: "-.01em", fontStyle: "italic",
            marginBottom: DS.sp6, color: DS.gray1,
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

/* ═══════════════════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════════════════ */

function ProcessSection() {
  const steps = [
    { n: "01", title: "Conversa", desc: "Entendo seu negócio, público e o que você precisa resolver." },
    { n: "02", title: "Proposta", desc: "Escopo, prazo e investimento claros. Sem surpresas." },
    { n: "03", title: "Construção", desc: "Desenvolvo com atualizações semanais. Você acompanha tudo." },
    { n: "04", title: "Entrega", desc: "Site no ar, treinamento e suporte pós-lançamento incluso." },
  ];

  return (
    <section id="processo" style={{ padding: DS.sectionPad, background: DS.bg }}>
      <div style={{ maxWidth: DS.sectionMax, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Como funciona</SectionLabel>
          <SectionTitle>
            Do primeiro contato ao <em style={{ color: DS.green, fontStyle: "italic" }}>site no ar</em>
          </SectionTitle>
        </Reveal>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: DS.border, borderRadius: DS.cardRadius, overflow: "hidden", marginTop: DS.sectionGap }}>
          {steps.map((s, i) => (
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

/* ═══════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════ */

function CTASection() {
  return (
    <section id="cta" style={{ padding: DS.sectionPad, position: "relative", overflow: "hidden", background: DS.bg2 }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${DS.greenSoft}, transparent)` }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: DS.sp10, height: 1, background: `linear-gradient(90deg, transparent, ${DS.green}, transparent)` }} />

      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <Reveal>
          <p style={{
            fontFamily: DS.fontDisplay,
            fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 400,
            lineHeight: 1.05, letterSpacing: DS.titleTracking, marginBottom: DS.sp5,
          }}>
            Vamos construir<br/>
            <em style={{ background: `linear-gradient(135deg, ${DS.orange}, #fdba74)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>
              algo que funciona?
            </em>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <BodyText style={{ fontSize: 17, marginBottom: DS.sp7 }}>
            Me manda uma mensagem, conta sobre o seu negócio, e em até 24h
            te envio uma proposta clara e sem enrolação.
          </BodyText>
        </Reveal>

        <Reveal delay={0.2}>
          <ButtonPrimary href={WA} target="_blank" rel="noopener noreferrer"
            style={{ padding: "20px 48px", borderRadius: DS.sp4, fontSize: 17 }}>
            <WhatsAppIcon /> Falar no WhatsApp
          </ButtonPrimary>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer style={{ padding: `${DS.sp6}px ${DS.sp6}px`, background: DS.bg, borderTop: `1px solid ${DS.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: DS.sp4 }}>
        <span style={{ fontWeight: 600, fontSize: DS.smallSize, color: DS.gray4 }}>gustavo.dev</span>
        <p style={{ fontSize: DS.sp3, color: "rgba(255,255,255,.15)" }}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════ */

export default function App() {
  return (
    <div className="grain">
      <style>{css}</style>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <PortfolioSection />
      <SocialProof />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
