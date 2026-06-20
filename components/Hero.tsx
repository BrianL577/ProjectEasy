import FlagBadge from "./FlagBadge";
import type { Region } from "@/data/regions";

export default function Hero({ regions }: { regions: Region[] }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Fuel &amp; ground handling network</div>
          <h1>
            Everything about working with us is encapsulated in one word —{" "}
            <span className="accent">easy</span>.
          </h1>
          <p className="lede">
            We coordinate aircraft fuel and handling for commercial operators —
            scheduled, ad-hoc, and cargo — through a global network of
            suppliers, into-plane agents, FBOs, and handlers, with one
            dedicated point of contact every time.
          </p>
          <div className="hero-cta-row">
            <a href="#schedule" className="btn btn-primary">
              Request a quote
            </a>
            <a href="#services" className="btn btn-ghost">
              See what&apos;s included
            </a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <b>500+</b>
              <span>OPERATORS SERVED</span>
            </div>
            <div className="hstat">
              <b>1000s</b>
              <span>AIRCRAFT SUPPORTED</span>
            </div>
            <div className="hstat">
              <b>millions</b>
              <span>GALLONS / TRAILING 12 MO.</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-head">
            <h4>Network coverage</h4>
            <FlagBadge>pending verification</FlagBadge>
          </div>
          <div>
            {regions.map((r) => (
              <div className="region-row" key={r.code}>
                <span className="region-name">{r.name}</span>
                <span className="region-count">
                  {r.count !== null ? r.count : "—"}
                  <span className={`dot ${r.status !== "confirmed" ? "amber" : ""}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
