"use client";

import Link from "next/link";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  return (
    <>
    <footer id="contact" style={{ background: "#111122", padding: "60px 24px 24px", color: "#aaa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginBottom: 40 }}>
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>ABOUT FIXORA</h4>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "#D1D5DC" }}>
              The FIXORA is London&apos;s trusted property maintenance company, providing reliable and affordable services for homes and businesses across the city.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              <span style={{ color: "#D1D5DC", cursor: "pointer" }}><FacebookIcon /></span>
              <span style={{ color: "#D1D5DC", cursor: "pointer" }}><TwitterIcon /></span>
              <span style={{ color: "#D1D5DC", cursor: "pointer" }}><InstagramIcon /></span>
              <span style={{ color: "#D1D5DC", cursor: "pointer" }}><LinkedInIcon /></span>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#D1D5DC", textTransform: "uppercase", marginBottom: 16 }}>SERVICES</h4>
            {["Plumbing", "Electrical Work", "Painting & Decorating", "Carpentry", "Cleaning", "Handyman"].map((s) => (
              <Link key={s} className="footer-link" href="/#services">{s}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#D1D5DC", textTransform: "uppercase", marginBottom: 16 }}>QUICK LINKS</h4>
            <Link className="footer-link" href="/about">About Us</Link>
            <Link className="footer-link" href="/#services">Our Services</Link>
            <Link className="footer-link" href="/#areas">Areas We Cover</Link>
            <Link className="footer-link" href="/contact">Contact Us</Link>
            <a className="footer-link" href="#">Privacy Policy</a>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#D1D5DC", textTransform: "uppercase", marginBottom: 16 }}>CONTACT US</h4>
            <div style={{ fontSize: 13, lineHeight: 2.2, color: "#D1D5DC" }}>
              <p>&#128205; 123 Property Lane</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;London, EC1A 1BB</p>
              <p>&#128222; 020 234 5678</p>
              <p>&#9993;&#65039; info@fps.co.uk</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid #222", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 12, color: "#99A1AF" }}>&copy; 2025 Fixora Property Services. All rights reserved.</p>
          <div style={{ display: "flex", gap: 16 }}>
            <a className="footer-link" href="#" style={{ fontSize: 12 }}>Privacy Policy</a>
            <a className="footer-link" href="#" style={{ fontSize: 12 }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    <style>{`
      .footer-link {
        color: #aaa;
        text-decoration: none;
        font-size: 13px;
        line-height: 2;
        transition: color 0.2s;
        display: block;
      }

      .footer-link:hover {
        color: #f5a623;
      }

      @media (max-width: 1024px) {
        .footer-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      @media (max-width: 768px) {
        .footer-bottom {
          flex-direction: column !important;
          gap: 14px !important;
          text-align: center;
        }
      }

      @media (max-width: 560px) {
        .footer-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }
    `}</style>
    </>
  );
}
