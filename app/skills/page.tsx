import MyCard from "@/components/Mycard";
import SideMenu from "@/components/SideMenu";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const skills = [
  { name: "React", percent: 60, icon: "⚛️" },
  { name: "Figma", percent: 85, icon: "🎨" },
  { name: "HTML/CSS", percent: 80, icon: "🎯" },
  { name: "Next.js", percent: 80, icon: "N" },
  { name: "Java Script", percent: 60, icon: "JS" },
  { name: "GitHub", percent: 90, icon: "🐙" },
];

function CircleProgress({ percent, icon, name }: { percent: number; icon: string; name: string }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
      <div style={{ position: "relative", width: 88, height: 88 }}>
        <svg width="88" height="88" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="44" cy="44" r={r} fill="none" stroke="#333" strokeWidth="5" />
          <circle
            cx="44"
            cy="44"
            r={r}
            fill="none"
            stroke="#f97316"
            strokeWidth="5"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>{icon}</span>
          <span style={{ fontSize: "0.65rem", color: "#f97316", fontWeight: 700 }}>{percent}%</span>
        </div>
      </div>
      <span style={{ fontSize: "0.75rem", color: "#ccc" }}>{name}</span>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <main
      className={libreFranklin.className}
      style={{
        minHeight: "100vh",
        background: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* MyCard */}
        <div style={{ flexShrink: 0 }}>
          <MyCard />
        </div>

        {/* Content */}
        <div style={{ flex: 1, color: "#fff" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "24px" }}>
            My <span style={{ color: "#f97316" }}>Skills</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {skills.map((skill, i) => (
              <CircleProgress key={i} percent={skill.percent} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/skills" />
        </div>
      </div>
    </main>
  );
}