"use client";
import { useState, useEffect } from "react";
import { DS } from "@/styles/tokens";

const LINKS = [["Serviços","#servicos"],["Trabalho","#portfolio"],["Processo","#processo"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`
      fixed top-0 inset-x-0 z-50 h-[72px] flex items-center justify-center px-8
      transition-all duration-500
      ${scrolled ? "bg-[#08080A]/82 backdrop-blur-2xl border-b border-white/[.05]" : "bg-transparent border-b border-transparent"}
    `}>
      <div className="w-full max-w-[1280px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
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

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map(([l,h]) => (
            <a key={h} href={h} className="text-[#A1A1AA] hover:text-[#F5F5F7] no-underline transition-colors duration-300"
              style={{ fontSize: DS.smallSize, fontWeight: 500 }}>{l}</a>
          ))}
          <a href="#cta" className="no-underline transition-all duration-300"
            style={{ background: DS.white, color: DS.bg, padding: DS.buttonPadSm, borderRadius: DS.buttonRadius, fontSize: 13, fontWeight: DS.buttonWeight }}
            onMouseEnter={e => e.target.style.background = DS.green}
            onMouseLeave={e => e.target.style.background = DS.white}>Falar comigo</a>
        </div>

        <button onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none text-white cursor-pointer p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{
          position: "absolute", top: 72, left: 0, right: 0,
          background: "rgba(8,8,10,.97)", backdropFilter: "blur(32px)",
          borderBottom: `1px solid ${DS.border}`,
          padding: `${DS.sp5}px ${DS.sp6}px`, display: "flex", flexDirection: "column", gap: DS.sp5,
        }}>
          {LINKS.map(([l,h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}
              style={{ color: DS.gray1, textDecoration: "none", fontSize: DS.bodySize, fontWeight: 500 }}>{l}</a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} style={{
            background: DS.white, color: DS.bg,
            padding: DS.buttonPadLg, borderRadius: DS.buttonRadius,
            fontSize: DS.buttonFontSize, fontWeight: DS.buttonWeight,
            textDecoration: "none", textAlign: "center",
            transition: "all .3s",
          }}>Falar comigo</a>
        </div>
      )}
    </nav>
  );
}
