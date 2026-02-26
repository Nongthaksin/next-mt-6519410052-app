import MyCard from "@/components/Mycard";
import SideMenu from "@/components/Sidemenu";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const timeline = [
  {
    period: "2022 - Present",
    highlight: true,
    items: [
      { title: "UI/UX Designer", subtitle: "Freelance" },
      { title: "Fullstack Web Developer", subtitle: "Freelance" },
    ],
  },
  {
    period: "2022 - 2025",
    highlight: false,
    items: [
      {
        title: "I am a student majoring in IoT",
        subtitle: "Southeast Asia University",
      },
    ],
  },
  {
    period: "2016 - 2021",
    highlight: false,
    items: [
      { title: "High school", subtitle: "Mathayomwatsing School" },
    ],
  },
];

export default function EduExpPage() {
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
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: "24px",
            }}
          >
            Education &amp;{" "}
            <span style={{ color: "#f97316" }}>Experience</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {timeline.map((block, i) => (
              <div key={i}>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: block.highlight ? "#f97316" : "#888",
                    marginBottom: "6px",
                  }}
                >
                  {block.period}
                </p>
                {block.items.map((item, j) => (
                  <div key={j} style={{ marginBottom: "4px" }}>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#888",
                        fontWeight: 400,
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/eduexp" />
        </div>
      </div>
    </main>
  );
}