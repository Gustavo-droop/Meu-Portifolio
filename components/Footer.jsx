import { DS } from "@/styles/tokens";

export default function Footer() {
  return (
    <footer style={{ padding: `${DS.sp6}px`, background: DS.bg, borderTop: `1px solid ${DS.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: DS.sp4 }}>
        <span style={{ fontWeight: 600, fontSize: DS.smallSize, color: DS.gray4 }}>gustavo.dev</span>
        <p style={{ fontSize: DS.sp3, color: "rgba(255,255,255,.15)" }}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
