"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, BookOpen, FileText, Briefcase, Wrench, MessageSquare } from "lucide-react";

const menuItems = [
  { href: "/", icon: Home },
  { href: "/about", icon: User },
  { href: "/eduexp", icon: BookOpen },
  { href: "/spec", icon: FileText },
  { href: "/projects", icon: Briefcase },
  { href: "/skills", icon: Wrench },
  { href: "/contactme", icon: MessageSquare },
];

interface SideMenuProps {
  activePath?: string;
}

export default function SideMenu({ activePath }: SideMenuProps) {
  const pathname = usePathname();
  const currentPath = activePath || pathname;

  return (
    <>
      <style>{`
        .sidemenu {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: #2a2a2a;
          border-radius: 16px;
          padding: 12px 10px;
        }

        .sidemenu-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: #888;
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
        }

        .sidemenu-link:hover {
          color: #f97316;
          background: rgba(249, 115, 22, 0.1);
        }

        .sidemenu-link.active {
          color: #f97316;
          background: rgba(249, 115, 22, 0.15);
        }
      `}</style>

      <nav className="sidemenu">
        {menuItems.map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`sidemenu-link ${currentPath === href ? "active" : ""}`}
          >
            <Icon size={18} />
          </Link>
        ))}
      </nav>
    </>
  );
}
