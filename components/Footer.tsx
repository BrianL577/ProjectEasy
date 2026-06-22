export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col" style={{ maxWidth: 280 }}>
            <img
              src="/efs-logo.png"
              alt="easy flight support"
              style={{ height: 36, marginBottom: 16 }}
            />
            <p style={{ color: "var(--muted)", fontSize: 13.5 }}>
              Tailor-made fuel, ground handling coordination, and VIP
              transportation support for aircraft operators — we just make
              everything easy.
            </p>
          </div>

          <div className="foot-col">
            <h5>Network</h5>
            <a href="#network">Coverage by region</a>
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
