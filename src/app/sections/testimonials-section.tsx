import { TestimonialCard } from "@/components/testimonial-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const testimonials = [
  {
    quote: "Excellent service! They imported my Toyota Harrier from Japan without any hassles. The process was transparent and the car arrived exactly as described.",
    author: "Sarah Namukasa, Kampala",
  },
  {
    quote: "Found my dream house through their real estate services. Professional, reliable, and always available to answer questions. Highly recommended!",
    author: "James Okello, Entebbe",
  },
  {
    quote: "Best car import agent in Uganda! They saved me thousands and delivered my BMW exactly on time. Professional service from start to finish.",
    author: "Michael Ssemwogerere, Mukono",
  },
];

export function TestimonialsSection() {
  return (
    <SectionContainer className="bg-secondary">
      <SectionTitle>What Our Clients Say</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
