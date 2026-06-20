import FlagBadge from "./FlagBadge";
import type { Region } from "@/data/regions";
import type { Partner } from "@/data/partners";

export default function NetworkSection({
  regions,
  partners,
}: {
  regions: Region[];
  partners: Partner[];
}) {
  const total = regions.reduce((sum, r) => sum + (r.count ?? 0), 0);
  const allReconciled = regions.every((r) => r.status === "confirmed");

  return (
    <section id="network" className="panel-bg">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Network</div>
          <h2>A network built from vetted partners, not a database of guesses.</h2>
          <p>
            Every partner below is independently confirmed. Airport-level counts
            per partner are pulled from the latest verified master list —
            anything not yet reconciled is marked rather than estimated.
          </p>
        </div>

        <div className="total-banner">
          <div className="total-num">{total}+</div>
          <div className="total-label">
            airports across the network
            {!allReconciled && (
              <FlagBadge>totals pending master-sheet reconciliation</FlagBadge>
            )}
          </div>
        </div>

        <div className="partner-row">
          {partners.map((p) => (
            <div className="partner-chip" key={p.name}>
              {p.name}
            </div>
          ))}
        </div>

        <div className="region-cards">
          {regions.map((r) => (
            <div className="region-card" key={r.code}>
              <h4>{r.name}</h4>
              <div className="count">{r.count !== null ? r.count : "?"}</div>
              <div className="status">
                {r.status === "confirmed"
                  ? "verified"
                  : r.status === "expanding"
                  ? "expanding market"
                  : `pending — ${r.source}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
