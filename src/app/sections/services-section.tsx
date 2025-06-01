import { ServiceCard } from "@/components/service-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const services = [
  {
    iconClass: "fas fa-ship",
    title: "Car Import & Auction",
    description: "Complete car importation services from Japan, UAE, UK, and US with full documentation support.",
  },
  {
    iconClass: "fas fa-key",
    title: "Property Sales",
    description: "Buy and sell residential and commercial properties with our expert guidance and market knowledge.",
  },
  {
    iconClass: "fas fa-home",
    title: "Property Rentals",
    description: "Find your perfect rental property or list your property for rent with our comprehensive services.",
  },
  {
    iconClass: "fas fa-calculator",
    title: "Cost Estimation",
    description: "Get accurate AI-powered cost estimates for car imports including taxes, shipping, and clearance fees.",
  },
];

export function ServicesSection() {
  return (
    <SectionContainer id="services" className="bg-secondary">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
