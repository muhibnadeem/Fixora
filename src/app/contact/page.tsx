import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

const contactItems = [
  { icon: <PhoneIcon />, title: "Phone", lines: ["020 1234 5678"] },
  { icon: <MailIcon />, title: "Email", lines: ["info@fixora.co.uk"] },
  { icon: <PinIcon />, title: "Address", lines: ["123 London", "Street", "London, UK", "W1A 1AA"] },
  {
    icon: <ClockIcon />,
    title: "Opening Hours",
    lines: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 5:00 PM",
      "Sunday: Emergency Service Only",
      "24/7 Emergency Callout Available",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <section className="contact-hero">
          <h1>CONTACT US</h1>
          <p>Get in touch for a free quote or to discuss your requirements</p>
        </section>

        <section className="contact-main">
          <div className="contact-main-inner">
            <div className="contact-form-column">
              <h2>REQUEST A FREE QUOTE</h2>
              <form className="contact-form">
                <label>
                  <span>FULL NAME *</span>
                  <input type="text" name="name" />
                </label>
                <label>
                  <span>EMAIL ADDRESS *</span>
                  <input type="email" name="email" />
                </label>
                <label>
                  <span>PHONE NUMBER *</span>
                  <input type="tel" name="phone" />
                </label>
                <label>
                  <span>SERVICE REQUIRED *</span>
                  <input type="text" name="service" />
                </label>
                <label>
                  <span>MESSAGE *</span>
                  <textarea name="message" placeholder="Please provide details about your requirements..." />
                </label>
                <button type="submit">SEND ENQUIRY</button>
              </form>
            </div>

            <aside className="contact-info-column">
              <h2>GET IN TOUCH</h2>
              <div className="contact-info-list">
                {contactItems.map((item) => (
                  <div className="contact-info-item" key={item.title}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-map" aria-label="Map placeholder">
                <PinIcon />
                <span>Map integration would go here</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-emergency">
          <h2>NEED EMERGENCY SERVICE?</h2>
          <p>We&apos;re available 24/7 for emergency repairs and urgent callouts.</p>
          <a href="tel:02012345678">CALL NOW: 020 1234 5678</a>
        </section>
      </main>
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap');

        .contact-page {
          --gold: #f6b51b;
          --navy: #2f3d5d;
          --ink: #273452;
          --muted: #4b5568;
          background: #fff;
          color: var(--ink);
          font-family: 'Open Sans', Arial, sans-serif;
          min-height: 100vh;
        }

        .contact-page * {
          box-sizing: border-box;
        }

        .contact-hero {
          min-height: 252px;
          background: var(--navy);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px 52px;
        }

        .contact-hero h1,
        .contact-main h2,
        .contact-emergency h2 {
          font-family: 'Montserrat', Arial, sans-serif;
        }

        .contact-hero h1 {
          margin: 0 0 14px;
          font-size: 54px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .contact-hero p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 24px;
          line-height: 1.45;
        }

        .contact-main {
          background: #fff;
          padding: 74px 0 74px;
        }

        .contact-main-inner {
          width: min(1460px, calc(100% - 140px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .contact-main h2 {
          margin: 0 0 29px;
          color: var(--ink);
          font-size: 33px;
          line-height: 1.1;
          font-weight: 900;
        }

        .contact-form {
          display: grid;
          gap: 20px;
        }

        .contact-form label {
          display: grid;
          gap: 10px;
        }

        .contact-form span {
          color: #151515;
          font-size: 15px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          border: 1px solid #d7dce4;
          background: #fff;
          color: var(--ink);
          font: 16px 'Open Sans', Arial, sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .contact-form input {
          height: 56px;
          padding: 0 16px;
        }

        .contact-form textarea {
          min-height: 165px;
          resize: vertical;
          padding: 18px;
        }

        .contact-form textarea::placeholder {
          color: #8b8f98;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(246, 181, 27, 0.18);
        }

        .contact-form button {
          height: 56px;
          border: 0;
          background: var(--gold);
          color: #fff;
          font: 700 17px 'Open Sans', Arial, sans-serif;
          letter-spacing: 0.04em;
          cursor: pointer;
          margin-top: 6px;
        }

        .contact-info-list {
          display: grid;
          gap: 24px;
          margin-bottom: 42px;
        }

        .contact-info-item {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 18px;
          align-items: start;
        }

        .contact-info-icon {
          width: 55px;
          height: 55px;
          background: var(--gold);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-info-icon svg {
          width: 28px;
          height: 28px;
        }

        .contact-info-item h3 {
          margin: 2px 0 7px;
          color: var(--ink);
          font-family: 'Montserrat', Arial, sans-serif;
          font-size: 19px;
          line-height: 1.1;
          font-weight: 900;
        }

        .contact-info-item p {
          margin: 0 0 4px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.3;
        }

        .contact-map {
          height: 292px;
          border: 1px solid #d4d8df;
          background: #f3f3f3;
          color: #70798d;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
        }

        .contact-map svg {
          width: 53px;
          height: 53px;
          stroke-width: 1.8;
        }

        .contact-emergency {
          background: var(--gold);
          text-align: center;
          padding: 58px 24px 18px;
          color: var(--ink);
        }

        .contact-emergency h2 {
          margin: 0 0 24px;
          font-size: 32px;
          line-height: 1.1;
          font-weight: 900;
        }

        .contact-emergency p {
          margin: 0 0 28px;
          color: #1f2c47;
          font-size: 19px;
        }

        .contact-emergency a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 322px;
          height: 54px;
          background: var(--navy);
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        @media (max-width: 1024px) {
          .contact-main-inner {
            width: min(100% - 48px, 920px);
          }

          .contact-main-inner {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-main-inner {
            width: min(100% - 32px, 520px);
          }

          .contact-hero {
            min-height: 200px;
          }

          .contact-hero h1 {
            font-size: 38px;
          }

          .contact-hero p {
            font-size: 18px;
          }

          .contact-main {
            padding: 48px 0;
          }

          .contact-main h2 {
            font-size: 26px;
          }

          .contact-info-item {
            grid-template-columns: 48px 1fr;
          }

          .contact-info-icon {
            width: 48px;
            height: 48px;
          }

          .contact-info-item p {
            font-size: 16px;
          }

          .contact-emergency h2 {
            font-size: 26px;
          }

          .contact-emergency a {
            width: 100%;
            min-width: 0;
          }

        }
      `}</style>
    </div>
  );
}
