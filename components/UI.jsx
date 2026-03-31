"use client";
import { DS } from "@/styles/tokens";

/* ═══════════════════════════════════════════════
   TAG — single consistent style with 3 variants
   ═══════════════════════════════════════════════ */
export function Tag({ children, variant = "green" }) {
  const styles = {
    green:  { color: DS.green, background: DS.greenSoft },
    muted:  { color: DS.gray3, background: "rgba(255,255,255,.03)", border: `1px solid ${DS.border}` },
    orange: { color: DS.orange, background: "rgba(249,115,22,.08)" },
  };
  return (
    <span style={{
      fontSize: DS.tagSize,
      fontWeight: DS.tagWeight,
      letterSpacing: DS.tagTracking,
      borderRadius: DS.tagRadius,
      padding: DS.tagPad,
      display: "inline-block",
      ...styles[variant],
    }}>
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   SECTION LABEL — line + uppercase text
   ═══════════════════════════════════════════════ */
export function SectionLabel({ children, color = DS.green }) {
  return (
    <p style={{
      fontSize: DS.labelSize,
      fontWeight: DS.labelWeight,
      letterSpacing: DS.labelTracking,
      textTransform: "uppercase",
      color,
      marginBottom: DS.sp5,
      display: "flex",
      alignItems: "center",
      gap: DS.sp3,
    }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: color }} />
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════
   SECTION TITLE — serif, consistent sizing
   ═══════════════════════════════════════════════ */
export function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: DS.fontDisplay,
      fontSize: DS.titleSize,
      fontWeight: DS.titleWeight,
      lineHeight: DS.titleLineHeight,
      letterSpacing: DS.titleTracking,
    }}>
      {children}
    </h2>
  );
}

/* ═══════════════════════════════════════════════
   BODY TEXT — consistent paragraph styling
   ═══════════════════════════════════════════════ */
export function BodyText({ children, style = {} }) {
  return (
    <p style={{
      fontSize: DS.bodySize,
      color: DS.gray2,
      lineHeight: DS.bodyLineHeight,
      ...style,
    }}>
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════
   BUTTONS — primary (orange) & secondary (outline)
   ═══════════════════════════════════════════════ */
export function ButtonPrimary({ children, href, style: customStyle = {}, ...props }) {
  return (
    <a
      href={href}
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: DS.sp3,
        background: DS.orange,
        color: "#fff",
        padding: DS.buttonPadLg,
        borderRadius: DS.buttonRadius,
        fontSize: DS.buttonFontSize,
        fontWeight: DS.buttonWeight,
        textDecoration: "none",
        letterSpacing: ".01em",
        boxShadow: `0 4px 24px ${DS.orangeGlow}`,
        transition: "all .35s cubic-bezier(.22,1,.36,1)",
        ...customStyle,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 12px 40px ${DS.orangeGlow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 4px 24px ${DS.orangeGlow}`;
      }}
    >
      {children}
    </a>
  );
}

export function ButtonSecondary({ children, href, ...props }) {
  return (
    <a
      href={href}
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: `1px solid ${DS.borderHover}`,
        color: DS.gray2,
        padding: DS.buttonPadLg,
        borderRadius: DS.buttonRadius,
        fontSize: DS.buttonFontSize,
        fontWeight: 600,
        textDecoration: "none",
        transition: "all .3s cubic-bezier(.22,1,.36,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = DS.gray4;
        e.currentTarget.style.color = DS.white;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = DS.borderHover;
        e.currentTarget.style.color = DS.gray2;
      }}
    >
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════════
   CARD — consistent container
   ═══════════════════════════════════════════════ */
export function Card({ children, padding = DS.cardPadding, highlight = false, style = {}, ...props }) {
  return (
    <div
      {...props}
      style={{
        background: highlight ? `linear-gradient(160deg, ${DS.greenSoft}, ${DS.bg3})` : DS.bg3,
        border: `1px solid ${highlight ? DS.greenBorder : DS.cardBorder}`,
        borderRadius: DS.cardRadius,
        padding,
        transition: "all .4s cubic-bezier(.22,1,.36,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ICONS — reusable across components
   ═══════════════════════════════════════════════ */
export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
