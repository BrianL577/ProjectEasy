import FlagBadge from "./FlagBadge";

export default function WhySection() {
  return (
    <section id="why" className="panel-bg">
      <div className="wrap why-grid">
        <div>
          <div className="eyebrow">Why easy</div>
          <h2 style={{ fontSize: 30, fontWeight: 800, maxWidth: 380 }}>
            No price-shopping bots. A specialist who knows your route.
          </h2>
          <div className="why-list">
            <div className="why-item">
              <div className="why-num">01</div>
              <div>
                <h4>Relationship-based quoting</h4>
                <p>
                  Every request is reviewed by a specialist, not a pricing
                  algorithm — so your terms reflect your actual route, aircraft,
                  and volume.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <div>
                <h4>Transparent, not public</h4>
                <p>
                  We won&apos;t publish rates online, but we will tell you
                  directly if we can&apos;t match or beat what you&apos;re
                  currently paying.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <div>
                <h4>No commitment required</h4>
                <p>
                  Use easy for one trip or every trip. There&apos;s no contract
                  requirement to access network pricing.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-num">04</div>
              <div>
                <h4>Outside the network? Still covered</h4>
                <p>
                  If you&apos;re flying somewhere outside our direct partners,
                  we&apos;ll still help you find where — and when — to refuel
                  for the best value.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="quote-card">
          <p>
            &quot;We are fully transparent and let our customers know if easy is
            not able to match or beat a price. Safety is always our top
            priority.&quot;
          </p>
          <div className="who">— easy fuel, company overview</div>
          <div style={{ marginTop: 22 }}>
            <FlagBadge dark>confirm response-time SLA with Mike</FlagBadge>
          </div>
        </div>
      </div>
    </section>
  );
}
