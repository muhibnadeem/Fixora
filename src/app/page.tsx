"use client";

import { useState, useEffect, useRef, type MouseEvent, type TouchEvent } from "react";

const StarIcon = ({ filled = true }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#f5a623" : "#ddd"} stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

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

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4" strokeWidth="2.2"/>
  </svg>
);

const CertifiedIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="5.5"/><path d="m8.5 13.5 -1.6 7 5.1-2.8 5.1 2.8 -1.6-7"/>
  </svg>
);

const QualityIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9"/><path d="m7.5 12.5 3 3 6-7"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
);
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
);

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

/* ─── Service Icons ─── */
/* ─── Why Choose Us Icons ─── */
const TrustedIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const FastIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const AffordableIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const EmergencyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);


const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

/* ─── Main Component ─── */
export default function FinestPropertyServices() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeReviewSlide, setActiveReviewSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [liveOpen, setLiveOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const mainServices = [
    { icon: "🧰", title: "HANDYMAN", desc: "General repairs and maintenance for your home or office property" },
    { icon: "🪚", title: "CARPENTRY", desc: "Custom woodwork, furniture repairs, and fitting services" },
    { icon: "🧽", title: "CLEANING", desc: "Professional cleaning services for residential and commercial properties" },
    { icon: "🪜", title: "DECORATING", desc: "Interior and exterior decorating services for every room" },
    { icon: "🔧", title: "PLUMBING", desc: "Full plumbing services, from repairs to installations" },
    { icon: "🚿", title: "DRAIN & BLOCKAGES", desc: "Drain clearing and unblocking services" },
    { icon: "⚡", title: "ELECTRICAL WORK", desc: "Safe and certified electrical work for homes and businesses" },
    { icon: "🔐", title: "DOORS, WINDOWS & LOCKS", desc: "Installation, repairs and security solutions" },
  ];

  const additionalServices = [
    { icon: "▦", title: "FLOORING", desc: "Installation and repair for laminate, vinyl, hardwood, and tiles" },
    { icon: "◩", title: "PLASTERING & SKIMMING", desc: "Smooth wall finishes, ceiling repairs, and surface preparation" },
    { icon: "🎨", title: "PAINTING & DECORATING", desc: "Clean, precise painting and decorative finishes inside and out" },
    { icon: "▥", title: "FENCING & DECKING", desc: "Garden fencing, decking installation, and outdoor timber repairs" },
    { icon: "🌧️", title: "GUTTER CLEANING", desc: "Blocked gutter clearing, checks, and basic rainwater maintenance" },
    { icon: "⌂", title: "ROOFING", desc: "Roof repairs, inspections, flashing, and minor leak fixes" },
    { icon: "♨️", title: "HEATING & HOT WATER", desc: "Heating support, hot water issues, and system maintenance" },
    { icon: "💧", title: "LEAK INVESTIGATION", desc: "Careful tracing and diagnosis for hidden or visible leaks" },
    { icon: "▣", title: "FURNITURE ASSEMBLY", desc: "Flat-pack assembly and furniture setup for homes and offices" },
    { icon: "♻️", title: "RUBBISH REMOVAL", desc: "Responsible removal of household, garden, and renovation waste" },
    { icon: "▤", title: "HOUSE REMOVALS", desc: "Practical support for local moves and property clear-outs" },
    { icon: "📦", title: "HOUSEHOLD DELIVERY", desc: "Pickup and delivery help for bulky household items" },
  ];

  const services = showAllServices ? [...mainServices, ...additionalServices] : mainServices;

  const reviews = [
    { name: "Sarah Johnson", text: "Finest Prop Prop has been my go-to for property maintenance. Their professionalism, quality work, and attention to detail are unmatched. Highly recommended!", rating: 5 },
    { name: "Michael Brown", text: "From the initial estimate, to clean-up, the quality of work. The team was punctual, courteous, very talented in their specific crafts.", rating: 5 },
    { name: "Emma Wilson", text: "Absolutely fantastic. They transformed my flat into a brand new looking one. They took great care of my property while working, Very professional.", rating: 5 },
    { name: "Daniel Hughes", text: "Booked them for plumbing and decorating work. The team arrived on time, kept everything tidy, and explained the job clearly before starting.", rating: 5 },
    { name: "Aisha Khan", text: "Very reliable service for our rental property. Communication was quick, the quote was fair, and the repair was finished the same day.", rating: 5 },
    { name: "Oliver Smith", text: "Excellent carpentry work. The finish was clean, the measurements were perfect, and the whole process felt professional from start to finish.", rating: 5 },
    { name: "Priya Patel", text: "They handled several maintenance jobs in one visit and saved us a lot of time. Friendly, careful, and genuinely helpful.", rating: 5 },
    { name: "James Walker", text: "Great emergency response. They found the leak quickly and prevented further damage. I would definitely call them again.", rating: 5 },
    { name: "Rebecca Green", text: "The cleaning and repair team did a brilliant job before we moved in. Everything looked fresh, neat, and ready to use.", rating: 5 },
  ];

  const reviewSlides = Math.ceil(reviews.length / 3);
  const visibleReviews = Array.from({ length: 3 }, (_, index) => reviews[(activeReviewSlide * 3 + index) % reviews.length]);

  const faqs = [
    {
      question: "What areas of London do you cover?",
      answer: "We cover Central London, Greater London, and surrounding areas within and around the M25. If your postcode is not listed in our service area section, contact us and we will confirm availability before booking.",
    },
    {
      question: "Do you offer emergency call-out services?",
      answer: "Yes. We offer emergency support for urgent issues such as leaks, electrical faults, lock problems, heating issues, and blocked drains. Availability depends on your location and the time of day, but we always aim to respond as quickly as possible.",
    },
    {
      question: "How quickly can you respond to a service request?",
      answer: "For standard jobs, we usually arrange the earliest convenient appointment based on your schedule. For urgent work, we prioritise same-day or next-available call-outs where possible, especially for problems that could cause damage or safety concerns.",
    },
    {
      question: "Are your tradespeople qualified and insured?",
      answer: "Yes. Our tradespeople are experienced, vetted, and insured. Specialist work is handled by suitably qualified professionals, including Gas Safe registered engineers and NICEIC-approved electricians where required.",
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes. We provide clear, no-obligation quotes before work begins. For simple jobs, we can often estimate from photos and details you send. For larger or more complex work, we may recommend a site visit to give you an accurate price.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept common payment methods including bank transfer and card payments. Payment details and timing will be confirmed with your booking or invoice, and we keep all charges clear before proceeding.",
    },
    {
      question: "Do you offer any guarantees on your work?",
      answer: "Yes. We stand behind our workmanship and aim to resolve any issue promptly if something is not right. Guarantee terms can vary depending on the type of work and materials used, and we will explain this clearly on your quote.",
    },
    {
      question: "Can you help with detailed property maintenance?",
      answer: "Absolutely. We can support one-off repairs, multi-trade maintenance, landlord property upkeep, end-of-tenancy preparation, and planned maintenance schedules. Tell us what needs doing and we can coordinate the right trades for the job.",
    },
  ];

  const centralLondonAreas = ["Westminster", "Islington", "Tower Hamlets", "Southwark", "Camden", "Hackney", "Lambeth", "Kensington & Chelsea"];
  const greaterLondonAreas = ["Barnet", "Haringey", "Redbridge", "Bexley", "Croydon", "Merton", "Richmond", "Ealing", "Harrow", "Enfield", "Waltham Forest", "Havering", "Bromley", "Sutton", "Kingston", "Hounslow", "Brent", "Hillingdon"];

  const certificationLogos = [
    { icon: "🔥", label: "GAS SAFE REGISTER" },
    { icon: "⚡", label: "NICEIC APPROVED" },
    { icon: "✓", label: "TRUST MARK" },
    { icon: "★", label: "CHECKATRADE" },
    { icon: "?", label: "WHICH? TRUSTED" },
    { icon: "🏗️", label: "FMB MEMBER" },
  ];

  const handleSliderMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleUp = () => { isDragging.current = false; };
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveReviewSlide((current) => (current + 1) % reviewSlides);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [reviewSlides]);

  return (
    <div style={{ fontFamily: "'Open Sans', 'Segoe UI', sans-serif", color: "#333", background: "#fff", margin: 0, padding: 0, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        .nav-link { color: #1a1a2e; text-decoration: none; font-size: 14px; font-weight: 700; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .nav-quote-button { background: #1a1a2e; color: #fff; border: none; padding: 10px 20px; font-weight: 800; font-size: 13px; cursor: pointer; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.5px; text-decoration: none; font-family: 'Montserrat', sans-serif; transition: all 0.3s; }
        .nav-quote-button:hover { background: #2a2a4e; transform: translateY(-1px); }
        .menu-toggle { display: none; align-items: center; justify-content: center; gap: 8px; width: 100%; border: none; background: #1a1a2e; color: #fff; padding: 12px 18px; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 900; text-transform: uppercase; cursor: pointer; }
        .menu-toggle-lines { display: inline-flex; flex-direction: column; gap: 4px; }
        .menu-toggle-lines span { width: 18px; height: 2px; background: currentColor; display: block; border-radius: 999px; }
        .topbar-inner span, .cert-logo-label, .area-list-item { overflow-wrap: anywhere; }
        
        .btn-primary { background: #f5a623; color: #fff; border: none; padding: 12px 28px; font-weight: 700; font-size: 14px; cursor: pointer; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s; font-family: 'Montserrat', sans-serif; }
        .btn-primary:hover { background: #e09000; transform: translateY(-1px); }
        
        .btn-outline { background: transparent; color: #fff; border: 2px solid #fff; padding: 12px 28px; font-weight: 600; font-size: 14px; cursor: pointer; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s; font-family: 'Montserrat', sans-serif; }
        .btn-outline:hover { background: #fff; color: #1a1a2e; }
        
        .btn-dark { background: #1a1a2e; color: #fff; border: none; padding: 14px 32px; font-weight: 700; font-size: 14px; cursor: pointer; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s; font-family: 'Montserrat', sans-serif; }
        .btn-dark:hover { background: #2a2a4e; }
        
        .section-title { font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 800; color: #1a1a2e; text-transform: uppercase; text-align: center; margin-bottom: 12px; }
        .section-subtitle { color: #666; text-align: center; font-size: 15px; max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
        
        .service-card { text-align: center; padding: 26px 18px 22px; transition: all 0.3s; cursor: pointer; border-radius: 6px; overflow: hidden; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
        .service-3d-stage { width: 92px; height: 92px; margin: 0 auto 16px; perspective: 600px; display: flex; align-items: center; justify-content: center; }
        .service-3d-icon { position: relative; width: 74px; height: 74px; border-radius: 18px; background: linear-gradient(145deg, #fff2c9 0%, #f5a623 46%, #c87900 100%); box-shadow: 0 18px 24px rgba(26,26,46,0.18), inset 0 3px 6px rgba(255,255,255,0.7), inset 0 -7px 12px rgba(98,56,0,0.28); transform: rotateX(14deg) rotateY(-16deg) rotateZ(2deg); display: flex; align-items: center; justify-content: center; }
        .service-3d-icon::before { content: ''; position: absolute; inset: 8px 10px auto 10px; height: 18px; border-radius: 999px; background: rgba(255,255,255,0.45); filter: blur(1px); }
        .service-3d-icon::after { content: ''; position: absolute; left: 10px; right: 10px; bottom: -12px; height: 12px; border-radius: 50%; background: rgba(26,26,46,0.18); filter: blur(5px); transform: rotateX(70deg); }
        .service-3d-symbol { position: relative; z-index: 1; font-size: 34px; line-height: 1; text-shadow: 0 3px 4px rgba(26,26,46,0.25); transform: translateZ(24px); }
        .service-card-title { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; margin: 12px 0 8px; color: #1a1a2e; letter-spacing: 0.5px; }
        .service-card-desc { font-size: 12px; color: #888; line-height: 1.5; }
        
        .review-card { background: #fff; padding: 28px 24px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); transition: all 0.35s ease; min-height: 230px; }
        .review-card.featured { transform: scale(1.08); box-shadow: 0 18px 42px rgba(26,26,46,0.16); border: 2px solid #f5a623; z-index: 2; }
        .review-slider-button { width: 42px; height: 42px; border-radius: 50%; border: none; background: #1a1a2e; color: #fff; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.25s; }
        .review-slider-button:hover { background: #f5a623; color: #1a1a2e; transform: translateY(-1px); }
        .review-dot { width: 10px; height: 10px; border-radius: 50%; border: none; background: #d8d8d8; cursor: pointer; transition: all 0.25s; }
        .review-dot.active { width: 26px; border-radius: 999px; background: #f5a623; }
        
        .faq-item { border-bottom: 1px solid #eee; }
        .faq-question { display: flex; justify-content: space-between; align-items: center; padding: 18px 0; cursor: pointer; font-size: 15px; font-weight: 800; color: #333; transition: color 0.2s; }
        .faq-question:hover { color: #f5a623; }
        .faq-answer { padding: 0 20px 18px; font-size: 14px; color: #666; line-height: 1.7; text-align: center; }
        
        .slider-container { position: relative; width: 100%; max-width: 700px; margin: 0 auto; height: 400px; overflow: hidden; border-radius: 8px; cursor: ew-resize; user-select: none; }
        .slider-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
        .slider-handle { position: absolute; top: 0; bottom: 0; width: 4px; background: #fff; cursor: ew-resize; z-index: 10; transform: translateX(-50%); }
        .slider-handle::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 36px; height: 36px; border-radius: 50%; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; }
        
        .areas-title { font-family: 'Montserrat', sans-serif; font-size: 34px; line-height: 1.2; font-weight: 900; color: #2d3853; text-transform: uppercase; text-align: center; margin-bottom: 12px; letter-spacing: 0.2px; }
        .areas-subtitle { color: #4f5b70; text-align: center; font-size: 21px; max-width: 680px; margin: 0 auto 50px; line-height: 1.35; }
        .area-panel { border-radius: 8px; padding: 34px 32px 36px; min-height: 448px; }
        .area-panel.light { background: #f0f0f0; color: #2d3853; }
        .area-panel.dark { background: #2e3b5c; color: #fff; }
        .area-panel-heading { display: flex; align-items: center; gap: 14px; margin-bottom: 30px; }
        .area-heading-icon { width: 48px; height: 48px; border-radius: 50%; background: #f7b217; color: #fff; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }
        .area-panel-title { font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 900; text-transform: uppercase; margin: 0; }
        .area-list { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 58px; row-gap: 15px; }
        .area-list-item { display: flex; align-items: center; gap: 10px; color: #2d3853; font-size: 16px; line-height: 1.3; }
        .area-panel.dark .area-list-item { color: rgba(255,255,255,0.84); }
        .area-check { width: 18px; height: 18px; border-radius: 50%; border: 2px solid #f7b217; color: #f7b217; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 900; line-height: 1; flex: 0 0 auto; }
        .area-cta { background: #f7b217; border-radius: 8px; padding: 34px 24px 31px; margin-top: 48px; text-align: center; color: #fff; }
        .area-cta-title { font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 17px; }
        .area-cta-copy { font-size: 16px; line-height: 1.45; max-width: 640px; margin: 0 auto 26px; }
        .area-cta-button { border: none; background: #fff; color: #2d3853; padding: 15px 34px; min-width: 270px; font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 900; text-transform: uppercase; cursor: pointer; }
        
        .trust-section-title { font-family: 'Montserrat', sans-serif; font-size: 34px; line-height: 1.2; font-weight: 900; color: #2d3853; text-transform: uppercase; text-align: center; margin-bottom: 46px; letter-spacing: 0.2px; }
        .trust-badge-icon { width: 80px; height: 80px; border-radius: 50%; background: #f7b217; color: #fff; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
        .trust-badge-title { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 900; color: #2d3853; text-transform: uppercase; margin-bottom: 12px; }
        .trust-badge-copy { font-size: 14px; color: #4f5b70; line-height: 1.5; }
        .accreditation-panel { background: #f0f0f0; border-radius: 9px; padding: 48px 24px; margin-top: 64px; }
        .accreditation-title { font-family: 'Montserrat', sans-serif; font-size: 21px; font-weight: 900; color: #2d3853; text-align: center; text-transform: uppercase; margin-bottom: 34px; }
        .cert-logo { height: 114px; background: #fff; border-radius: 8px; box-shadow: 0 4px 9px rgba(0,0,0,0.18); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; }
        .cert-logo-icon { font-size: 34px; line-height: 1; color: #000; }
        .cert-logo-label { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 12px; color: #2d3853; text-transform: uppercase; }
        
        .footer-link { color: #aaa; text-decoration: none; font-size: 13px; line-height: 2; transition: color 0.2s; display: block; }
        .footer-link:hover { color: #f5a623; }
        /* Floating live-help button */
        .live-button-container { position: fixed; right: 20px; bottom: 20px; z-index: 2200; display: flex; flex-direction: column-reverse; align-items: flex-end; gap: 12px; }
        .live-button { position: relative; background: #f5a623; color: #111122; border: none; width: 56px; height: 56px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(26,26,46,0.18); cursor: pointer; font-weight: 800; font-family: 'Montserrat', sans-serif; text-transform: uppercase; font-size: 12px; padding: 0 12px; overflow: visible; }
        .live-button:focus { outline: 3px solid rgba(245,166,35,0.22); }
        .live-button .ping { position: absolute; inset: 0; border-radius: 999px; background: #cad325; opacity: 0.75; animation: pingAnim 1.6s cubic-bezier(0,0,0.2,1) infinite; pointer-events: none; }
        @keyframes pingAnim { 0% { transform: scale(0.9); opacity: 0.75; } 75% { transform: scale(1.6); opacity: 0; } 100% { transform: scale(1.6); opacity: 0; } }
        .live-button:hover .ping { animation: none; opacity: 0; }
        .live-options { display: none; flex-direction: column; gap: 10px; align-items: center; }
        .live-button-container.open .live-options { display: flex; }
        .live-option { width: 48px; height: 48px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; color: #fff; text-decoration: none; box-shadow: 0 6px 16px rgba(0,0,0,0.12); transition: transform 0.18s, opacity 0.18s; }
        .live-option.whatsapp { background: #25D366; }
        .live-option.messenger { background: #0084FF; }
        .live-option.facebook { background: #1877F2; }
        .live-option:hover { transform: translateY(-3px); }
        .live-option-label { font-size: 12px; margin-left: 8px; color: #fff; font-weight: 700; }
        
        .yellow-bar { background: #f5a623; color: #fff; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: fadeInUp 0.6s ease forwards; }

        @media (max-width: 1024px) {
          .topbar-inner { flex-direction: column !important; justify-content: center !important; padding: 12px 24px !important; text-align: center; }
          .main-nav { flex-wrap: wrap !important; gap: 18px !important; padding: 12px 24px !important; }
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .why-grid, .trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .work-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .review-card.featured { transform: scale(1.03); }
          .cert-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .areas-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .area-panel { min-height: auto; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 768px) {
          .section-title, .trust-section-title, .areas-title { font-size: 27px !important; }
          .section-subtitle, .areas-subtitle { font-size: 16px !important; margin-bottom: 34px !important; }
          .hero-section { padding: 76px 20px !important; background-position: center right !important; }
          .hero-content { text-align: center !important; }
          .hero-title { font-size: 38px !important; }
          .hero-copy { max-width: none !important; font-size: 16px !important; }
          .hero-actions { justify-content: center !important; flex-wrap: wrap !important; }
          .services-grid, .work-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .work-grid > :last-child:nth-child(odd) { grid-column: 1 / -1; justify-self: center; width: calc((100% - 24px) / 2); min-width: 260px; }
          .review-shell { align-items: stretch !important; gap: 10px !important; }
          .review-grid { grid-template-columns: 1fr !important; }
          .review-card { display: none; min-height: auto; }
          .review-card.featured { display: block; transform: none; }
          .slider-container { height: 320px; }
          .trust-section, .areas-section { padding-left: 24px !important; padding-right: 24px !important; }
          .accreditation-panel { padding: 36px 18px; }
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          .area-list { column-gap: 28px; }
          .area-panel-title { font-size: 21px; }
          .area-cta-title, .cta-title { font-size: 22px !important; }
          .btn-primary, .btn-outline, .btn-dark, .nav-quote-button, .area-cta-button { white-space: normal; }
          .footer-bottom { flex-direction: column !important; gap: 14px !important; text-align: center; }
        }

        @media (max-width: 560px) {
          .topbar-inner > div:last-child { justify-content: center !important; gap: 10px !important; }
          .menu-toggle { display: inline-flex; }
          .main-nav { flex-direction: column !important; align-items: stretch !important; gap: 0 !important; padding: 10px 18px !important; }
          .main-nav .nav-link, .main-nav .nav-quote-button { display: none; width: 100%; text-align: center; padding: 13px 14px; border-top: 1px solid rgba(26,26,46,0.12); border-radius: 0; }
          .main-nav.open .nav-link, .main-nav.open .nav-quote-button { display: block; }
          .nav-link { font-size: 12px; }
          .nav-quote-button { order: 10; }
          .hero-section { padding: 62px 18px !important; }
          .hero-title { font-size: 31px !important; }
          .hero-actions { flex-direction: column !important; }
          .hero-actions .btn-primary, .hero-actions .btn-outline { width: 100%; }
          .services-grid, .why-grid, .work-grid, .trust-grid, .cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .work-grid > :last-child:nth-child(odd) { width: calc((100% - 20px) / 2); min-width: 0; }
          .service-card { padding: 24px 16px 20px; }
          .review-shell { position: relative; padding: 0 42px; }
          .review-slider-button { position: absolute; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; z-index: 3; }
          .review-slider-button:hover { transform: translateY(-50%); }
          .review-shell .review-slider-button:first-child { left: 0; }
          .review-shell .review-slider-button:last-child { right: 0; }
          .slider-container { height: 250px; }
          .area-panel { padding: 28px 22px; }
          .area-panel-heading { align-items: flex-start; }
          .area-panel-title { font-size: 19px; }
          .trust-badge-title { font-size: 15px; }
          .cert-logo-label { font-size: 11px; text-align: center; padding: 0 8px; }
          .area-list { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 13px; }
          .area-cta { padding: 30px 18px; }
          .area-cta-button { min-width: 0; width: 100%; }
          .faq-question { gap: 16px; align-items: flex-start; }
          .faq-answer { padding-left: 0; padding-right: 0; }
        }
      `}</style>

      {/* ─── HEADER / NAV ─── */}
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
            <a className="nav-link" id="main-navigation-links" href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a className="nav-link" href="#services" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
            <a className="nav-link" href="#areas" onClick={() => setIsMenuOpen(false)}>AREAS</a>
            <a className="nav-link" href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a className="nav-quote-button" href="#contact" onClick={() => setIsMenuOpen(false)}>FREE QUOTE</a>
            <a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </nav>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section id="home" className="hero-section" style={{
        backgroundColor: "#2c3e50",
        backgroundImage: "linear-gradient(rgba(26,26,46,0.72), rgba(26,26,46,0.72)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 24px 100px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative construction-like overlay */}
        <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent 40%, rgba(245,166,35,0.15) 100%)" }} />
        <div className="hero-content" style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 className="hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 48, fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16, lineHeight: 1.1 }}>
            PROFESSIONAL SERVICES
          </h1>
          <p className="hero-copy" style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, marginBottom: 32, maxWidth: 500, lineHeight: 1.6 }}>
            Expert tradespeople for every property maintenance need
          </p>
          <div className="hero-actions" style={{ display: "flex", gap: 16 }}>
            <button className="btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>BOOK NOW</button>
            <button className="btn-outline" style={{ fontSize: 15, padding: "14px 32px" }}>OUR SERVICES</button>
          </div>
        </div>
      </section>

      {/* ─── SERVICES WE PROVIDE ─── */}
      <section id="services" style={{ padding: "80px 24px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="section-title">SERVICES WE PROVIDE</h2>
          <div style={{ height: 4, width: 60, background: "#f5a623", margin: "16px auto 40px", borderRadius: 2 }} />
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ background: "#fff" }}>
                <div className="service-3d-stage" aria-hidden="true">
                  <div className="service-3d-icon">
                    <span className="service-3d-symbol">{s.icon}</span>
                  </div>
                </div>
                <div className="service-card-title">{s.title}</div>
                <div className="service-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-primary" onClick={() => setShowAllServices((current) => !current)}>
              {showAllServices ? "SHOW LESS SERVICES" : "SEE ALL SERVICES"}
            </button>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ background: "#F2F2F2", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 38, fontWeight: 800, color: "#2F3A56", textTransform: "uppercase", textAlign: "center", marginBottom: 36 }}>WHY CHOOSE US</h2>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { icon: <TrustedIcon />, title: "TRUSTED PROFESSIONALS", desc: "Our tradespeople are fully vetted, qualified, and experienced professionals." },
              { icon: <FastIcon />, title: "FAST RESPONSE", desc: "We respond to all enquiries and emergencies promptly and efficiently." },
              { icon: <AffordableIcon />, title: "AFFORDABLE PRICING", desc: "Competitive rates with no hidden fees. Contact us for a free, no-obligation quote." },
              { icon: <EmergencyIcon />, title: "24/7 EMERGENCY SERVICE", desc: "Available around the clock for urgent property maintenance emergencies." },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center", padding: "20px 12px" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 14, background: "#f5a623", width: 64, height: 64, borderRadius: "50%", alignItems: "center", margin: "0 auto 14px", color: "#fff" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700, color: "#2F3A56", textTransform: "uppercase", marginBottom: 10, letterSpacing: 0.5 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#2F3A56", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR RECENT WORK ─── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="section-title">OUR RECENT WORK</h2>
          <div style={{ height: 4, width: 60, background: "#f5a623", margin: "16px auto 40px", borderRadius: 2 }} />
          <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { title: "Painting & Decorating", color: "#4a90d9" },
              { title: "Electrical Installation", color: "#2ecc71" },
              { title: "Property Maintenance", color: "#9b59b6" },
            ].map((work, i) => (
              <div key={i} style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                <div style={{ height: 200, background: `linear-gradient(135deg, ${work.color}44, ${work.color}88)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: work.color, opacity: 0.6 }} />
                </div>
                <div style={{ padding: "16px 20px", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT OUR CLIENTS SAY ─── */}
      <section style={{ padding: "80px 24px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
          <div style={{ height: 4, width: 60, background: "#f5a623", margin: "16px auto 40px", borderRadius: 2 }} />
          <div className="review-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 }}>
            <button
              className="review-slider-button"
              aria-label="Previous reviews"
              onClick={() => setActiveReviewSlide((current) => (current - 1 + reviewSlides) % reviewSlides)}
            >
              <ArrowLeft />
            </button>
            <div className="review-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {visibleReviews.map((review, i) => (
              <div key={i} className={`review-card${i === 1 ? " featured" : ""}`}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {[...Array(5)].map((_, j) => <StarIcon key={j} filled={j < review.rating} />)}
                </div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>&ldquo;{review.text}&rdquo;</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{review.name}</p>
              </div>
            ))}
            </div>
            <button
              className="review-slider-button"
              aria-label="Next reviews"
              onClick={() => setActiveReviewSlide((current) => (current + 1) % reviewSlides)}
            >
              <ArrowRight />
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {Array.from({ length: reviewSlides }, (_, i) => (
              <button
                key={i}
                className={`review-dot${activeReviewSlide === i ? " active" : ""}`}
                aria-label={`Show review slide ${i + 1}`}
                onClick={() => setActiveReviewSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER TRANSFORMATIONS ─── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="section-title">BEFORE & AFTER TRANSFORMATIONS</h2>
          <p className="section-subtitle">See the quality of our work. Drag the slider to compare results.</p>
          <div
            ref={sliderRef}
            className="slider-container"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
            onMouseDown={() => { isDragging.current = true; }}
            onTouchStart={() => { isDragging.current = true; }}
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
          >
            {/* After */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, #e8d5b7, #c4a882)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>AFTER</span>
            </div>
            {/* Before */}
            <div style={{ position: "absolute", top: 0, left: 0, width: `${sliderPosition}%`, height: "100%", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, #7a8b99, #4a5a6a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>BEFORE</span>
              </div>
            </div>
            {/* Handle */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: `${sliderPosition}%`, width: 4, background: "#fff", cursor: "ew-resize", zIndex: 10, transform: "translateX(-50%)" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 40, height: 40, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <ArrowLeft />
                <ArrowRight />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>Kitchen Renovation</h3>
            <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>Complete kitchen transformation including new cabinets and countertops</p>
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: i === 0 ? "#f5a623" : "#ddd", cursor: "pointer" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── YOUR TRUST IS OUR PRIORITY ─── */}
      <section className="trust-section" style={{ padding: "66px 50px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 className="trust-section-title">YOUR TRUST IS OUR PRIORITY</h2>
          <div className="trust-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 54, marginBottom: 0 }}>
            {[
              { icon: <ShieldIcon />, title: "FULLY INSURED", desc: "£5M public liability insurance" },
              { icon: <CertifiedIcon />, title: "CERTIFIED TRADESPEOPLE", desc: "Gas Safe & NICEIC registered" },
              { icon: <QualityIcon />, title: "QUALITY GUARANTEE", desc: "12-month workmanship warranty" },
              { icon: <CalendarIcon />, title: "EST. 2010", desc: "Over 15 years of experience" },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div className="trust-badge-icon">{item.icon}</div>
                <h3 className="trust-badge-title">{item.title}</h3>
                <p className="trust-badge-copy">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="accreditation-panel">
            <h3 className="accreditation-title">CERTIFIED & ACCREDITED</h3>
            <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24, marginBottom: 32 }}>
              {certificationLogos.map((logo, i) => (
                <div key={i} className="cert-logo">
                  <span className="cert-logo-icon">{logo.icon}</span>
                  <span className="cert-logo-label">{logo.label}</span>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 15, color: "#4f5b70", lineHeight: 1.6, margin: "0 auto" }}>
              All our engineers are DBS checked, fully qualified, and regularly audited to ensure the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AREAS WE COVER ─── */}
      <section id="areas" className="areas-section" style={{ padding: "66px 50px 72px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 className="areas-title">AREAS WE COVER</h2>
          <p className="areas-subtitle">Providing professional property maintenance services across London and surrounding areas within the M25</p>

          <div className="areas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 48 }}>
            {/* Central London */}
            <div className="area-panel light">
              <div className="area-panel-heading">
                <span className="area-heading-icon"><MapPinIcon /></span>
                <h3 className="area-panel-title">CENTRAL LONDON</h3>
              </div>
              <div className="area-list">
                {centralLondonAreas.map((area, i) => (
                  <span key={i} className="area-list-item"><span className="area-check">✓</span>{area}</span>
                ))}
              </div>
            </div>
            {/* Greater London */}
            <div className="area-panel dark">
              <div className="area-panel-heading">
                <span className="area-heading-icon"><MapPinIcon /></span>
                <h3 className="area-panel-title">GREATER LONDON</h3>
              </div>
              <div className="area-list">
                {greaterLondonAreas.map((area, i) => (
                  <span key={i} className="area-list-item"><span className="area-check">✓</span>{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Not Sure Banner */}
          <div className="area-cta">
            <h3 className="area-cta-title">NOT SURE IF WE COVER YOUR AREA?</h3>
            <p className="area-cta-copy">We regularly service areas within and around the M25. Contact us with your postcode, and we&apos;ll confirm if we can help you.</p>
            <button className="area-cta-button">CHECK YOUR POSTCODE</button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-subtitle">Still got questions? We&apos;re here to give answers to help maintain your property quickly & effectively.</p>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{faq.question}</span>
                  <span style={{ transform: activeFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}><ChevronDown /></span>
                </div>
                {activeFaq === i && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button className="btn-primary">STILL HAVE QUESTIONS?</button>
          </div>
        </div>
      </section>

      {/* ─── NEED HELP WITH YOUR PROPERTY? (CTA) ─── */}
      <section className="cta-section" style={{ padding: "64px 24px", background: "#1a1a2e", textAlign: "center" }}>
        <h2 className="cta-title" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 28, fontWeight: 800, color: "#fff", textTransform: "uppercase", marginBottom: 12 }}>NEED HELP WITH YOUR PROPERTY?</h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
          Call us free, we deliver top-quality results. Get in touch with us today! We&apos;ll be happy to talk about how we can help.
        </p>
        <button className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}>GET A FREE QUOTE</button>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="contact" style={{ background: "#111122", padding: "60px 24px 24px", color: "#aaa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginBottom: 40 }}>
            {/* About */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>ABOUT FIXORA</h4>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: "#888" }}>
                The FIXORA is London&apos;s trusted property maintenance company, providing reliable and affordable services for homes and businesses across the city.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                <span style={{ color: "#888", cursor: "pointer" }}><FacebookIcon /></span>
                <span style={{ color: "#888", cursor: "pointer" }}><TwitterIcon /></span>
                <span style={{ color: "#888", cursor: "pointer" }}><InstagramIcon /></span>
                <span style={{ color: "#888", cursor: "pointer" }}><LinkedInIcon /></span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>SERVICES</h4>
              {["Plumbing", "Electrical Work", "Painting & Decorating", "Carpentry", "Cleaning", "Handyman"].map((s, i) => (
                <a key={i} className="footer-link" href="#">{s}</a>
              ))}
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>QUICK LINKS</h4>
              {["About Us", "Our Services", "Areas We Cover", "Contact Us", "Privacy Policy"].map((s, i) => (
                <a key={i} className="footer-link" href="#">{s}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>CONTACT US</h4>
              <div style={{ fontSize: 13, lineHeight: 2.2, color: "#888" }}>
                <p>📍 123 Property Lane</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;London, EC1A 1BB</p>
                <p>📞 020 234 5678</p>
                <p>✉️ info@fps.co.uk</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" style={{ borderTop: "1px solid #222", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "#666" }}>© 2025 Fixora Property Services. All rights reserved.</p>
            <div style={{ display: "flex", gap: 16 }}>
              <a className="footer-link" href="#" style={{ fontSize: 12 }}>Privacy Policy</a>
              <a className="footer-link" href="#" style={{ fontSize: 12 }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating live-help button */}
      <div className={`live-button-container${liveOpen ? " open" : ""}`}>
        <div className="live-options" aria-hidden={!liveOpen}>
          <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="live-option whatsapp" aria-label="Chat on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="live-option facebook" aria-label="Open Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <button
          type="button"
          className="live-button"
          aria-expanded={liveOpen}
          aria-controls="live-options"
          onClick={() => setLiveOpen((s) => !s)}
        >
          <span className="ping" aria-hidden="true"></span>
          <span style={{ position: "relative", zIndex: 2 }}>Help</span>
        </button>
      </div>
    </div>
  );
}
