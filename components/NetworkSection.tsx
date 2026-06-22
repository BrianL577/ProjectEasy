import FlagBadge from "./FlagBadge";
import type { Region } from "@/data/regions";
import type { Partner } from "@/data/partners";

export default function NetworkSection({
  regions,
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
          <h2>A global network, available on request.</h2>
          <p>
            We work with a select group of vetted partners across Europe, Africa,
            the Middle East, and beyond. Partner details are shared directly with
            customers as part of the quoting process.
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
