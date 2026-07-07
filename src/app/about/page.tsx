import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 2.6 2.6L16.5 9" />
  </svg>
);

const values = [
  {
    icon: <TargetIcon />,
    title: "EXCELLENCE",
    text: "We strive for excellence in every job, no matter how big or small.",
  },
  {
    icon: <ShieldIcon />,
    title: "TRUST",
    text: "Building lasting relationships based on trust and transparency.",
  },
  {
    icon: <UsersIcon />,
    title: "CUSTOMER FOCUS",
    text: "Your satisfaction is our priority. We listen and deliver.",
  },
  {
    icon: <AwardIcon />,
    title: "QUALITY",
    text: "Premium materials and skilled workmanship guaranteed.",
  },
];

const reasons = [
  {
    title: "Fully Qualified Team",
    text: "All our tradespeople are fully qualified, certified, and experienced in their respective fields.",
  },
  {
    title: "Fully Insured",
    text: "Comprehensive insurance coverage for your complete peace of mind.",
  },
  {
    title: "Competitive Pricing",
    text: "Fair, transparent pricing with free, no-obligation quotes for all services.",
  },
  {
    title: "24/7 Emergency Service",
    text: "Available around the clock for urgent repairs and emergency situations.",
  },
  {
    title: "Same-Day Service",
    text: "Fast response times with same-day appointments available for most services.",
  },
  {
    title: "Satisfaction Guaranteed",
    text: "We stand behind our work with a satisfaction guarantee on all services.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <section className="about-hero">
          <h1>ABOUT FIXORA</h1>
          <p>Your trusted property maintenance partner in London</p>
        </section>

        <section className="about-intro">
          <div className="about-intro-copy">
            <h2>WHO WE ARE</h2>
            <p>
              Fixora Property Services is London&apos;s leading property maintenance company, providing comprehensive solutions for homeowners, landlords, tenants, and businesses across the capital.
            </p>
            <p>
              With years of experience in the industry, we&apos;ve built a reputation for excellence, reliability, and professionalism. Our team of skilled tradespeople are fully qualified, insured, and committed to delivering the highest standards of workmanship.
            </p>
            <p>
              From minor repairs to major renovations, we handle all your property maintenance needs in one place, saving you time, money, and hassle.
            </p>
          </div>
          <Image
            src="/about-storefront.png"
            alt="Fixora maintenance work storefront"
            width={617}
            height={405}
            className="about-intro-image"
            priority
          />
        </section>

        <section className="about-mission">
          <div className="about-section-heading">
            <h2>OUR MISSION</h2>
            <p>
              To provide exceptional property maintenance services that exceed our clients&apos; expectations while maintaining the highest standards of professionalism and quality.
            </p>
          </div>
          <div className="about-values">
            {values.map((value) => (
              <div className="about-value-card" key={value.title}>
                <div className="about-value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-why">
          <h2>WHY CHOOSE FIXORA</h2>
          <div className="about-reasons">
            {reasons.map((reason) => (
              <div className="about-reason" key={reason.title}>
                <CheckIcon />
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <h2>READY TO WORK WITH US?</h2>
          <p>
            Contact us today for a free consultation and see why thousands of London residents trust Fixora for their property maintenance needs.
          </p>
          <Link href="/contact">GET IN TOUCH</Link>
        </section>
      </main>
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap');

        .about-page {
          --gold: #f6b51b;
          --navy: #2f3d5d;
          --ink: #2f3a56;
          --muted: #5c687a;
          background: #fff;
          color: var(--ink);
          font-family: 'Open Sans', Arial, sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .about-page * {
          box-sizing: border-box;
        }

        .about-hero {
          min-height: 220px;
          background: var(--navy);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
        }

        .about-hero h1,
        .about-intro h2,
        .about-section-heading h2,
        .about-why h2,
        .about-cta h2,
        .about-value-card h3,
        .about-reason h3 {
          font-family: 'Montserrat', Arial, sans-serif;
        }

        .about-hero h1 {
          margin: 0 0 15px;
          font-size: 45px;
          line-height: 1;
          font-weight: 900;
        }

        .about-hero p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 20px;
          line-height: 1.45;
        }

        .about-intro {
          width: calc(100% - 96px);
          max-width: 1280px;
          margin: 0 auto;
          padding: 63px 0 64px;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 82px;
          align-items: center;
          min-width: 0;
        }

        .about-intro-copy {
          min-width: 0;
        }

        .about-intro h2 {
          margin: 0 0 23px;
          color: var(--ink);
          font-size: 35px;
          line-height: 1.1;
          font-weight: 900;
        }

        .about-intro p {
          margin: 0 0 21px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.55;
          max-width: 560px;
          overflow-wrap: break-word;
        }

        .about-intro p:last-child {
          margin-bottom: 0;
        }

        .about-intro-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .about-mission {
          background: #f1f1f1;
          padding: 66px 0 64px;
        }

        .about-section-heading {
          width: calc(100% - 48px);
          max-width: 760px;
          margin: 0 auto 47px;
          text-align: center;
        }

        .about-section-heading h2,
        .about-why h2 {
          margin: 0 0 19px;
          color: var(--ink);
          font-size: 34px;
          line-height: 1.1;
          font-weight: 900;
        }

        .about-section-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.45;
        }

        .about-values {
          width: calc(100% - 96px);
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .about-value-card {
          background: #fff;
          min-height: 220px;
          padding: 24px 28px 26px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-value-icon {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: var(--gold);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .about-value-icon svg {
          width: 31px;
          height: 31px;
        }

        .about-value-card h3 {
          margin: 0 0 13px;
          color: var(--ink);
          font-size: 17px;
          line-height: 1.1;
          font-weight: 900;
        }

        .about-value-card p {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.45;
        }

        .about-why {
          width: calc(100% - 96px);
          max-width: 1280px;
          margin: 0 auto;
          padding: 65px 0 62px;
        }

        .about-why h2 {
          text-align: center;
          margin-bottom: 51px;
        }

        .about-reasons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 100px;
          row-gap: 33px;
        }

        .about-reason {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: start;
        }

        .about-reason svg {
          width: 22px;
          height: 22px;
          color: var(--gold);
          margin-top: 2px;
        }

        .about-reason h3 {
          margin: 0 0 8px;
          color: var(--ink);
          font-size: 19px;
          line-height: 1.2;
          font-weight: 900;
        }

        .about-reason p {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.45;
        }

        .about-cta {
          background: var(--gold);
          color: var(--ink);
          text-align: center;
          padding: 64px 24px 66px;
        }

        .about-cta h2 {
          margin: 0 0 28px;
          font-size: 32px;
          line-height: 1.1;
          font-weight: 900;
        }

        .about-cta p {
          max-width: 900px;
          margin: 0 auto 34px;
          color: #1f2c47;
          font-size: 17px;
          line-height: 1.45;
        }

        .about-cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 188px;
          height: 54px;
          background: var(--navy);
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        @media (max-width: 1024px) {
          .about-intro,
          .about-values,
          .about-why {
            width: calc(100% - 48px);
            max-width: 900px;
          }

          .about-intro {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .about-values {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-reasons {
            column-gap: 44px;
          }
        }

        @media (max-width: 640px) {
          .about-hero {
            min-height: 190px;
          }

          .about-hero h1 {
            font-size: 36px;
          }

          .about-hero p {
            font-size: 17px;
          }

          .about-intro,
          .about-values,
          .about-why {
            width: calc(100% - 32px);
            max-width: 358px;
            margin-left: 16px;
            margin-right: auto;
          }

          .about-intro-copy,
          .about-intro p,
          .about-hero p {
            width: 100%;
            max-width: 100%;
          }

          .about-hero p,
          .about-cta p,
          .about-section-heading {
            max-width: 320px;
          }

          .about-intro {
            padding: 48px 0;
            display: block;
            overflow: hidden;
          }

          .about-intro-image {
            margin-top: 28px;
          }

          .about-intro h2,
          .about-section-heading h2,
          .about-why h2,
          .about-cta h2 {
            font-size: 27px;
          }

          .about-mission,
          .about-why,
          .about-cta {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .about-values,
          .about-reasons {
            grid-template-columns: 1fr;
          }

          .about-section-heading p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
