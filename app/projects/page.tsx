import MyCard from "@/components/Mycard";
import SideMenu from "@/components/SideMenu";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ProjectsPage() {
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
              marginBottom: "12px",
            }}
          >
            Featured <span style={{ color: "#f97316" }}>Projects</span>
          </h2>

          <p style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "6px" }}>
            Manage Task App - fullstack web development
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "#888",
              lineHeight: 1.6,
              marginBottom: "16px",
              maxWidth: "380px",
            }}
          >
            Here&apos;s my latest project built with Next.js and Laravel, using TailwindCSS on the
            front-end. Watch the video to see the responsive landing page in action!
          </p>

          {/* Project Preview */}
          <div
            style={{
              border: "1px solid #333",
              borderRadius: "12px",
              overflow: "hidden",
              maxWidth: "380px",
              background: "#111",
            }}
          >
            {/* Browser bar */}
            <div
              style={{
                background: "#222",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <div
                style={{
                  flex: 1,
                  background: "#333",
                  borderRadius: "4px",
                  height: "20px",
                  marginLeft: "8px",
                }}
              />
            </div>
            {/* Project image placeholder */}
            <div
              style={{
                background: "#1a1a2e",
                height: "160px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>Manage Task App</p>
              <div
                style={{
                  background: "#3b82f6",
                  color: "#fff",
                  fontSize: "0.72rem",
                  padding: "6px 24px",
                  borderRadius: "6px",
                  fontWeight: 600,
                }}
              >
                เริ่มต้น
              </div>
            </div>
          </div>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/projects" />
        </div>
      </div>
    </main>
  );
}