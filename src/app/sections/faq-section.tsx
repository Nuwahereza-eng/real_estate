import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const faqs = [
  {
    question: "How long does car importation take?",
    answer: "Typically 6-8 weeks from auction purchase to delivery in Uganda, including shipping time and customs clearance procedures.",
  },
  {
    question: "What are the total costs involved in car import?",
    answer: "Total costs include FOB price, shipping ($800-$1800 estimate), customs duty (typically 25% of CIF value), clearance fees, and our service charge. We provide detailed AI-powered cost breakdowns upfront. Try our AI Cost Estimator tool!",
  },
  {
    question: "Do you provide warranty on imported cars?",
    answer: "Yes, we provide a 3-month warranty on engine and transmission for all imported vehicles, plus comprehensive documentation support.",
  },
  {
    question: "Can I inspect the property before purchase?",
    answer: "Absolutely! We arrange property viewings at your convenience and provide detailed property reports including legal verification.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, mobile money (MTN & Airtel), and cash payments. Payment plans are available for qualified clients.",
  },
];

export function FaqSection() {
  return (
    <SectionContainer id="faq" className="bg-background">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}>
            <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
}
