import ServiceCard from "./ServiceCard";
import type { Service } from "@/data/services";

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Services</div>
          <h2>Our services. One point of contact.</h2>
          <p>Each &quot;easy&quot; service is its own specialty — hover or click a card for what&apos;s included.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
