import MyCard from "@/components/Mycard";
import SideMenu from "@/components/SideMenu";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function AboutPage() {
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
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#ccc",
              marginBottom: "12px",
            }}
          >
            About{" "}
            <span style={{ color: "#f97316", fontWeight: 600 }}>Me</span>
          </p>

          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            I find fulfillment in blending visual design with the power of
            coding to create meaningful experiences.
          </h2>

          <p
            style={{
              fontSize: "0.88rem",
              color: "#999",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at
            neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum
            voluptates obcaecati corrupti voluptatem.
          </p>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/about" />
        </div>
      </div>
    </main>
  );
}