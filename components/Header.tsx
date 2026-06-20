"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <div className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 12L21 5L14 12L21 19L3 12Z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="logo-word">
              <span style={{ color: "var(--red)" }}>e</span>
              <span className="easy">asy</span>
            </div>
            <div className="logo-sub">FLIGHT SUPPORT</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#network">Network</a>
          <a href="#services">Services</a>
          <a href="#why">Why easy</a>
          <a href="#loyalty">Loyalty</a>
        </nav>

        <div className="nav-cta">
          <a href="#schedule" className="btn btn-ghost">
            Existing customer
          </a>
          <a href="#schedule" className="btn btn-primary">
            Get a quote
          </a>
        </div>

        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="wrap mobile-panel" style={{ display: "flex" }}>
          <a href="#network" onClick={() => setOpen(false)}>
            Network
          </a>
          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="#why" onClick={() => setOpen(false)}>
            Why easy
          </a>
          <a href="#loyalty" onClick={() => setOpen(false)}>
            Loyalty
          </a>
          <a href="#schedule" onClick={() => setOpen(false)}>
            Get a quote
          </a>
        </div>
      )}
    </header>
  );
}
