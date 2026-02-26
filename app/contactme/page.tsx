"use client";

import MyCard from "@/components/Mycard";
import SideMenu from "@/components/Sidemenu";
import { Libre_Franklin } from "next/font/google";
import { useState } from "react";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ContactMePage() {
  const [newsletter, setNewsletter] = useState(false);

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
      <style>{`
        .contact-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid #555;
          color: #fff;
          font-size: 0.82rem;
          padding: 6px 0;
          outline: none;
          width: 100%;
          font-family: inherit;
        }
        .contact-input::placeholder {
          color: #f97316;
          font-size: 0.78rem;
        }
        .contact-input:focus {
          border-bottom-color: #f97316;
        }
        .contact-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid #555;
          color: #fff;
          font-size: 0.82rem;
          padding: 6px 0;
          outline: none;
          width: 100%;
          resize: none;
          font-family: inherit;
          height: 60px;
        }
        .contact-textarea::placeholder {
          color: #f97316;
          font-size: 0.78rem;
        }
        .contact-textarea:focus {
          border-bottom-color: #f97316;
        }
      `}</style>

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
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "4px" }}>
            Contact <span style={{ color: "#f97316" }}>Me</span>
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#aaa", marginBottom: "20px" }}>
            Let&apos;s get in touch!
          </p>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "420px" }}>
            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <input className="contact-input" placeholder="Email" type="email" />
              <input className="contact-input" placeholder="Phone" type="tel" />
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <input className="contact-input" placeholder="Name" type="text" />
              <input className="contact-input" placeholder="Adress" type="text" />
            </div>

            {/* Row 3 - Content */}
            <textarea className="contact-textarea" placeholder="Content" />

            {/* Newsletter checkbox */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.75rem",
                color: "#aaa",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                style={{ accentColor: "#f97316", cursor: "pointer" }}
              />
              I would like to receive the newsletter.
            </label>

            {/* Submit Button */}
            <button
              style={{
                background: "#f97316",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 0",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#ea6c0a")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#f97316")}
            >
              Submit
            </button>
          </div>
        </div>

        {/* SideMenu */}
        <div style={{ flexShrink: 0 }}>
          <SideMenu activePath="/contactme" />
        </div>
      </div>
    </main>
  );
}