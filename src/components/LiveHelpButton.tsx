"use client";

import { useState } from "react";

export function LiveHelpButton() {
  const [liveOpen, setLiveOpen] = useState(false);

  return (
    <>
      <div className={`live-button-container${liveOpen ? " open" : ""}`}>
        <div id="live-options" className="live-options" aria-hidden={!liveOpen}>
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
          onClick={() => setLiveOpen((open) => !open)}
        >
          <span className="ping" aria-hidden="true"></span>
          <span style={{ position: "relative", zIndex: 2 }}>Help</span>
        </button>
      </div>

      <style>{`
        .live-button-container {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 2200;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          gap: 12px;
        }

        .live-button {
          position: relative;
          background: #f5a623;
          color: #111122;
          border: none;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(26,26,46,0.18);
          cursor: pointer;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-size: 12px;
          padding: 0 12px;
          overflow: visible;
        }

        .live-button:focus {
          outline: 3px solid rgba(245,166,35,0.22);
        }

        .live-button .ping {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: #cad325;
          opacity: 0.75;
          animation: pingAnim 1.6s cubic-bezier(0,0,0.2,1) infinite;
          pointer-events: none;
        }

        @keyframes pingAnim {
          0% { transform: scale(0.9); opacity: 0.75; }
          75% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .live-button:hover .ping {
          animation: none;
          opacity: 0;
        }

        .live-options {
          display: none;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .live-button-container.open .live-options {
          display: flex;
        }

        .live-option {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          transition: transform 0.18s, opacity 0.18s;
        }

        .live-option.whatsapp {
          background: #25D366;
        }

        .live-option.facebook {
          background: #1877F2;
        }

        .live-option:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
}
