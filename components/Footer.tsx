export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col" style={{ maxWidth: 260 }}>
            <div className="logo" style={{ marginBottom: 14 }}>
              <div className="logo-mark" style={{ width: 30, height: 30 }}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L21 5L14 12L21 19L3 12Z" fill="white" />
                </svg>
              </div>
              <div className="logo-word" style={{ fontSize: 17 }}>
                <span style={{ color: "var(--red)" }}>e</span>
                <span className="easy">asy</span>
              </div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13.5 }}>
              Tailor-made fuel and ground handling coordination for aircraft
              operators — we just make everything easy.
            </p>
          </div>

          <div className="foot-col">
            <h5>Network</h5>
            <a href="#network">Coverage by region</a>
            <a href="#network">Partner directory</a>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <a href="#services">easy fuel</a>
            <a href="#services">easy handling</a>
            <a href="#services">easy move</a>
            <a href="#loyalty">easy loyalty</a>
          </div>

          <div className="foot-col">
            <h5>Get started</h5>
            <a href="#schedule">New customer</a>
            <a href="#schedule">Returning customer</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {year} easy flight support. Confidential network data — internal
            use prior to launch.
          </span>
          <span className="flag">prototype — not yet live</span>
        </div>
      </div>
    </footer>
  );
}
