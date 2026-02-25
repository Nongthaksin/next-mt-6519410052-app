import MyCard from "@/components/Mycard";
import SideMenu from "@/components/SideMenu";
import { Libre_Franklin } from "next/font/google";
import { Code2, Globe, Pen } from "lucide-react";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const specializations = [
  {
    title: "Front end-developer",
    description:
      "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
    icon: Code2,
  },
  {
    title: "UI/UX Designer",
    description:
      "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
    icon: Globe,
  },
  {
    title: "Graphic designer",
    description:
      "As a graphic designer, I transform ideas into visually striking and impactful designs.",
    icon: Pen,
  },
];

export default function SpecPage() {
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
          {/* Cursor tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "1.2rem" }}>🖱️</span>
            <span
              style={{
                background: "#22c55e",
                color: "#fff",
                fontSize: "0.72rem",
                fontWeight: 600,
                padding: "2px 10px",
                borderRadius: "20px",
              }}
            >
              Thaksin
            </span>
          </div>

          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: "20px",
            }}
          >
            My <span style={{ color: "#f97316" }}>Specializations</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid #333",
                    borderRadius: "12px",
                    padding: "16px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "6px" }}>
                      {spec.title}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "#888", lineHeight: 1.6, maxWidth: "320px" }}>
                      {spec.description}
                    </p>
                  </div>
                  <Icon size={18} color="#f97316" style={{ flexShrink: 0, marginTop: "2px" }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/spec" />
        </div>
      </div>
    </main>
  );
}