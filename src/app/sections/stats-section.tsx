import { SectionContainer } from "@/components/ui/section-container";

const stats = [
  { number: "500+", label: "Cars Imported" },
  { number: "200+", label: "Properties Sold" },
  { number: "8+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
];

export function StatsSection() {
  return (
    <SectionContainer className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="block text-4xl md:text-5xl font-bold text-accent">{stat.number}</span>
            <span className="block text-md md:text-lg mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
