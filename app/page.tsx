import MyCard from "@/components/Mycard";
import SideMenu from "@/components/Sidemenu";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
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
          position: "relative",
        }}
      >
        {/* MyCard */}
        <div style={{ flexShrink: 0 }}>
          <MyCard />
        </div>

        {/* Content */}
        <div style={{ flex: 1, color: "#fff" }}>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#ccc",
              marginBottom: "12px",
              letterSpacing: "0.02em",
            }}
          >
            Lets Work{" "}
            <span style={{ color: "#f97316", fontWeight: 600 }}>Together !</span>
          </p>

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            Hi From{" "}
            <span style={{ color: "#f97316" }}>Thaksin</span> ,<br />
            Interactive Designer &amp; Fullstack<br />
            Web Developer
          </h1>

          <p
            style={{
              fontSize: "0.88rem",
              color: "#999",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "420px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "40px" }}>
            <div>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#f97316",
                }}
              >
                3+
              </div>
              <div style={{ fontSize: "0.72rem", color: "#888", marginTop: "2px" }}>
                Years of<br />Experience
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#f97316",
                }}
              >
                10+
              </div>
              <div style={{ fontSize: "0.72rem", color: "#888", marginTop: "2px" }}>
                Projects<br />Completed
              </div>
            </div>
          </div>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/" />
        </div>
      </div>
    </main>
  );
}
