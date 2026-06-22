import FlagBadge from "./FlagBadge";
import type { Step } from "@/data/steps";

export default function LoyaltySection({ steps }: { steps: Step[] }) {
  return (
    <section id="loyalty">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ color: "var(--loyalty)" }}>
            Loyalty
          </div>
          <h2>The more you spend, the more you earn.</h2>
          <p>
            The easy loyalty program is a fidelity rewards scheme for aircraft
            operators and owners — rebates and credits are earned by dedicated
            customers when fuel and services are coordinated through easy.
          </p>
          <FlagBadge>
            verify with Mike — concept is year-end cash rebates proportional to
            volume (e.g. a commercial operator spending $1M might receive ~$10K
            back), but exact thresholds and terms need confirmation before
            publishing
          </FlagBadge>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="num">STEP {i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
