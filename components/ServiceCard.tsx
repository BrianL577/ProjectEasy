"use client";

import { useState } from "react";
import type { Service, ServiceTag } from "@/data/services";
import FlagBadge from "./FlagBadge";

const ICONS: Record<ServiceTag, JSX.Element> = {
  fuel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 22h12M5 22V7l5-4 5 4v3M14 10h3a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2M8 13h4" />
    </svg>
  ),
  handling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  move: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-2" />
      <circle cx="6.5" cy="18.5" r="2.5" />
      <circle cx="16.5" cy="18.5" r="2.5" />
    </svg>
  ),
  loyalty: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.6 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.6 7.1-.6z" />
    </svg>
  ),
  gourmet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
};

export default function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`svc-card ${open ? "open" : ""}`}
      data-tag={service.tag}
    >
      <div className="svc-icon">{ICONS[service.tag]}</div>
      <div>
        <div className="svc-name">{service.name}</div>
        <h3>{service.title}</h3>
        <p className="svc-desc">{service.desc}</p>
      </div>
      {service.status === "draft" && (
        <FlagBadge>{service.flagNote ?? "draft copy — confirm with Mike"}</FlagBadge>
      )}
      <button
        className="svc-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "− hide details" : "+ click to see more"}
      </button>
      <div className="svc-body">
        <ul>
          {service.bullets.map((b) => (
            <li key={b}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
