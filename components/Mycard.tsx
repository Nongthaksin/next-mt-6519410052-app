import Image from "next/image";
import { Libre_Franklin } from "next/font/google";
import { Facebook, Instagram, Linkedin, Chrome } from "lucide-react";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

interface MyCardProps {
  name?: string;
  studentId?: string;
  role?: string;
  imageSrc?: string;
}

export default function MyCard({
  name = "Thaksin",
  studentId = "6519410052",
  role = "Fullstack Web Developer",
  imageSrc = "/profile.png",
}: MyCardProps) {
  return (
    <div className={libreFranklin.className}>
      <style>{`
        .card-wrapper {
          display: inline-flex;
          flex-direction: column;
          width: 220px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          background: #fff;
          font-family: inherit;
        }

        .card-header {
          background: #1a1a1a;
          padding: 14px 16px 0 16px;
        }

        .card-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          margin-bottom: 10px;
        }

        .card-name span {
          color: #f97316;
        }

        .card-image-wrap {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
          position: relative;
          background: #2d2d2d;
        }

        .card-image-wrap span,
        .card-image-wrap img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
        }

        .card-body {
          background: #fff;
          padding: 10px 16px 6px 16px;
          text-align: center;
        }

        .stu-id {
          font-size: 0.7rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .stu-role {
          font-size: 0.65rem;
          color: #888;
          font-weight: 500;
          margin-top: 1px;
          margin-bottom: 10px;
        }

        .card-socials {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .card-socials a {
          color: #1a1a1a;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }

        .card-socials a:hover {
          color: #f97316;
        }

        .card-hire-btn {
          display: block;
          width: 100%;
          background: #f97316;
          color: #fff;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-align: center;
          padding: 9px 0;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-transform: uppercase;
          margin-bottom: 14px;
          transition: background 0.2s;
          font-family: inherit;
        }

        .card-hire-btn:hover {
          background: #ea6c0a;
        }
      `}</style>

      <div className="card-wrapper">
        {/* Header */}
        <div className="card-header">
          <div className="card-name">
            <span>T</span>haksin
          </div>
          <div className="card-image-wrap">
            <Image src={imageSrc} alt={name} width={220} height={220} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
        </div>

        {/* Body */}
        <div className="card-body">
          <div className="stu-id">STU ID: {studentId}</div>
          <div className="stu-role">{role}</div>

          {/* Social Icons */}
          <div className="card-socials">
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
            {/* X (Twitter) */}
            <a href="#" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#" aria-label="Google"><Chrome size={16} /></a>
          </div>

          {/* Hire Me Button */}
          <button className="card-hire-btn">HIRE ME !</button>
        </div>
      </div>
    </div>
  );
}