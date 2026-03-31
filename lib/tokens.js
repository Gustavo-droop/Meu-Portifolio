/**
 * DESIGN SYSTEM — gustavo.dev
 *
 * Regras rígidas:
 * - Spacing: escala de 4px (sp1=4, sp2=8 ... sp10=160)
 * - Section: sempre 160px vertical, 32px horizontal, 80px header→content
 * - Cards: sempre radius 20, padding 40×36
 * - Buttons: sempre radius 12, font 15px/700
 * - Tags: sempre radius 8, font 11px/700, pad 6×14
 * - Body: sempre 16px, gray2, line-height 1.75
 * - Labels: sempre 12px/700, tracking 3px, uppercase
 * - Titles: sempre serif, clamp(32-52), weight 400
 */

export const DS = {
  /* ── Colors ── */
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
  sp1: 4, sp2: 8, sp3: 12, sp4: 16, sp5: 24,
  sp6: 32, sp7: 48, sp8: 64, sp9: 80, sp10: 160,

  /* ── Section ── */
  sectionPad:  "160px 32px",
  sectionMax:  1100,
  sectionGap:  80,

  /* ── Typography ── */
  fontBody:    "'Satoshi', -apple-system, sans-serif",
  fontDisplay: "'Instrument Serif', Georgia, serif",

  labelSize:     12,
  labelWeight:   700,
  labelTracking: "3px",

  titleSize:       "clamp(32px, 4.5vw, 52px)",
  titleWeight:     400,
  titleTracking:   "-.03em",
  titleLineHeight: 1.05,

  bodySize:        16,
  bodyLineHeight:  1.75,
  smallSize:       14,

  /* ── Components ── */
  cardRadius:  20,
  cardPadding: "40px 36px",
  cardBorder:  "rgba(255,255,255,.05)",

  buttonRadius:   12,
  buttonPadLg:    "16px 36px",
  buttonPadSm:    "10px 24px",
  buttonFontSize: 15,
  buttonWeight:   700,

  tagRadius:   8,
  tagPad:      "6px 14px",
  tagSize:     11,
  tagWeight:   700,
  tagTracking: ".5px",

  /* ── Gaps ── */
  gapCards:  16,
  gapTags:   8,
  gapInline: 24,
};

export const WA_LINK =
  "https://wa.me/5500000000000?text=Olá! Vim pelo site e gostaria de um orçamento.";
