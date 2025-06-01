import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const processSteps = [
  {
    number: 1,
    title: "Choose Your Car",
    description: "Browse our featured cars or tell us your specific requirements. We'll find the perfect match from our trusted auction partners.",
  },
  {
    number: 2,
    title: "Secure Payment",
    description: "Make a secure deposit to reserve your vehicle. We handle all auction bidding and purchase procedures on your behalf.",
  },
  {
    number: 3,
    title: "Shipping & Clearance",
    description: "We arrange shipping and handle all customs clearance procedures. Track your car's journey from auction to your doorstep.",
  },
  {
    number: 4,
    title: "Delivery",
    description: "Receive your car in Uganda with all necessary documentation, registration support, and full warranty coverage.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionContainer className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <SectionTitle className="text-white">How Car Import Works</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div 
            key={step.number} 
            className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-3xl font-bold text-accent mb-4">{step.number}</div>
            <h3 className="text-xl font-headline font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-200 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
