"use client";

import Link from "next/link";
import { useState } from "react";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <header style={{ position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
        <div className="topbar-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 48, gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: "#f5a623", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 18, fontFamily: "'Montserrat', sans-serif" }}>F</span>
            </div>
            <span style={{ color: "#1a1a2e", fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: 0.3 }}>Fixora Property Services</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#1a1a2e", fontSize: 14, fontWeight: 600 }}>
              <PhoneIcon />
              <span>020 234 5678</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#1a1a2e", fontSize: 14, fontWeight: 600 }}>
              <MailIcon />
              <span>info@fps.co.uk</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#f5a623" }}>
        <nav className={`main-nav${isMenuOpen ? " open" : ""}`} style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 28, minHeight: 58 }}>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation-links"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-lines" aria-hidden="true"><span /><span /><span /></span>
            Menu
          </button>
          <Link className="nav-link" id="main-navigation-links" href="/#home" onClick={closeMenu}>HOME</Link>
          <Link className="nav-link" href="/#services" onClick={closeMenu}>SERVICES</Link>
          <Link className="nav-link" href="/about" onClick={closeMenu}>ABOUT US</Link>
          <Link className="nav-link" href="/#areas" onClick={closeMenu}>AREAS</Link>
          <Link className="nav-link" href="/#faq" onClick={closeMenu}>FAQ</Link>
          <Link className="nav-quote-button" href="/#contact" onClick={closeMenu}>FREE QUOTE</Link>
          <Link className="nav-link" href="/contact" onClick={closeMenu}>CONTACT</Link>
        </nav>
      </div>
    </header>
    <style>{`
      .nav-link {
        color: #1a1a2e;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        transition: color 0.2s;
      }

      .nav-link:hover {
        color: #fff;
      }

      .nav-quote-button {
        background: #1a1a2e;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-weight: 800;
        font-size: 13px;
        cursor: pointer;
        border-radius: 3px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        transition: all 0.3s;
      }

      .nav-quote-button:hover {
        background: #2a2a4e;
        transform: translateY(-1px);
      }

      .menu-toggle {
        display: none;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        border: none;
        background: #1a1a2e;
        color: #fff;
        padding: 12px 18px;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-weight: 900;
        text-transform: uppercase;
        cursor: pointer;
      }

      .menu-toggle-lines {
        display: inline-flex;
        flex-direction: column;
        gap: 4px;
      }

      .menu-toggle-lines span {
        width: 18px;
        height: 2px;
        background: currentColor;
        display: block;
        border-radius: 999px;
      }

      .topbar-inner span {
        overflow-wrap: anywhere;
      }

      @media (max-width: 1024px) {
        .topbar-inner {
          flex-direction: column !important;
          justify-content: center !important;
          padding: 12px 24px !important;
          text-align: center;
        }

        .main-nav {
          flex-wrap: wrap !important;
          gap: 18px !important;
          padding: 12px 24px !important;
        }
      }

      @media (max-width: 768px) {
        .nav-quote-button {
          white-space: normal;
        }
      }

      @media (max-width: 560px) {
        .topbar-inner > div:last-child {
          justify-content: center !important;
          gap: 10px !important;
        }

        .menu-toggle {
          display: inline-flex;
        }

        .main-nav {
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 0 !important;
          padding: 10px 18px !important;
        }

        .main-nav .nav-link,
        .main-nav .nav-quote-button {
          display: none;
          width: 100%;
          text-align: center;
          padding: 13px 14px;
          border-top: 1px solid rgba(26,26,46,0.12);
          border-radius: 0;
        }

        .main-nav.open .nav-link,
        .main-nav.open .nav-quote-button {
          display: block;
        }

        .nav-link {
          font-size: 12px;
        }

        .nav-quote-button {
          order: 10;
        }
      }
    `}</style>
    </>
  );
}
