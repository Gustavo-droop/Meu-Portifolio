import { DS } from "@/styles/tokens";
import { Tag } from "./UI";

export default function BrowserMockup({ variant = "full" }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-url">agendio-adm.netlify.app</div>
      </div>
      <div className="browser-body" style={{ background: "#0f1117" }}>
        {variant === "full" ? <Full /> : <Compact />}
      </div>
    </div>
  );
}

function Full() {
  const stats = [["32","Agendamentos"],["R$ 2.4k","Faturamento"],["94%","Confirmação"]];
  const agenda = [
    { time: "09:00", name: "Carlos M.", svc: "Corte + Barba", st: "Confirmado" },
    { time: "10:30", name: "Rafael S.", svc: "Corte Degradê", st: "Pendente" },
    { time: "14:00", name: "Lucas P.", svc: "Barba", st: "Confirmado" },
  ];

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
        {stats.map(([n,l]) => (
          <div key={l} style={{ background: "rgba(255,255,255,.04)", borderRadius: 10, padding: DS.sp3, border: "1px solid rgba(255,255,255,.04)" }}>
            <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 10, color: DS.gray3, marginTop: DS.sp1, fontWeight: 500 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: DS.tagSize, color: DS.gray3, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: DS.sp2 }}>Hoje — 28 Mar</div>
      {agenda.map((a, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: DS.sp3, borderRadius: DS.sp2, marginBottom: 6,
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

function Compact() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: DS.sp4 }}>
        <div style={{ fontSize: DS.bodySize, fontWeight: 800 }}>Agendio</div>
        <Tag>ATIVO</Tag>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: DS.sp2, marginBottom: DS.sp4 }}>
        {[["18","Hoje"],["R$ 1.2k","Semana"]].map(([n,l]) => (
          <div key={l} style={{ background: "rgba(255,255,255,.03)", borderRadius: DS.sp2, padding: DS.sp3, border: "1px solid rgba(255,255,255,.03)" }}>
            <div style={{ fontSize: DS.bodySize, fontWeight: 800, lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 9, color: DS.gray3, marginTop: 3 }}>{l}</div>
          </div>
        ))}
      </div>
      {["09:00 — Carlos M. · Corte","10:30 — Ana R. · Unha","14:00 — Pedro L. · Barba"].map((t, i) => (
        <div key={i} style={{
          fontSize: DS.sp3, color: DS.gray2, padding: `${DS.sp2}px ${DS.sp3}px`,
          borderRadius: 6, marginBottom: DS.sp1,
          background: i === 0 ? "rgba(34,197,94,.05)" : "transparent",
          borderLeft: i === 0 ? `2px solid ${DS.green}` : "2px solid transparent",
        }}>{t}</div>
      ))}
    </>
  );
}
