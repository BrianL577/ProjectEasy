import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NetworkSection from "@/components/NetworkSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import LoyaltySection from "@/components/LoyaltySection";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getRegions, getPartners, getServices, getSteps } from "@/lib/data";

export default async function Home() {
  const [regions, partners, services, steps] = await Promise.all([
    getRegions(),
    getPartners(),
    getServices(),
    getSteps(),
  ]);

  return (
    <>
      <Header />
      <Hero regions={regions} />
      <Reveal>
        <NetworkSection regions={regions} partners={partners} />
      </Reveal>
      <Reveal>
        <ServicesSection services={services} />
      </Reveal>
      <Reveal>
        <WhySection />
      </Reveal>
      <Reveal>
        <LoyaltySection steps={steps} />
      </Reveal>
      <Reveal>
        <ScheduleSection />
      </Reveal>
      <Footer />
    </>
  );
}
