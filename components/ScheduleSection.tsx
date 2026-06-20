import FlagBadge from "./FlagBadge";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="cta-section">
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: 580 }}>
          <div className="eyebrow" style={{ color: "#ddd" }}>
            Get started
          </div>
          <h2 style={{ color: "#fff" }}>
            Tell us about your operation. We&apos;ll take it from there.
          </h2>
          <p style={{ color: "#b9b9b9" }}>
            Choose the form that matches you — new customers go through a short
            intake, returning customers go straight to their account specialist.
          </p>
        </div>

        <div className="cta-grid">
          <div className="cta-card">
            <h3>New customer</h3>
            <p>First time working with easy? Start here — takes about 3 minutes.</p>
            <a
              className="btn btn-light"
              href="https://docs.google.com/forms/d/1nQ00kO4x4wnJZRR1Js3r-wQV7zR9O1bU_8pix4SL3_s/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start new request →
            </a>
            <div style={{ marginTop: 14 }}>
              <FlagBadge dark>swap in confirmed /viewform link</FlagBadge>
            </div>
          </div>

          <div className="cta-card">
            <h3>Returning customer</h3>
            <p>Already working with easy? Use your existing request form.</p>
            <a
              className="btn btn-light"
              href="https://docs.google.com/forms/d/1hVt_RC4LUWjNIZlIIJpR48O6nAj8LCzAOcds2IEEOis/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open my form →
            </a>
            <div style={{ marginTop: 14 }}>
              <FlagBadge dark>swap in confirmed /viewform link</FlagBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
