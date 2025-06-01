import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/app/sections/hero-section";
import { FeaturedCarsSection } from "@/app/sections/featured-cars-section";
import { FeaturedPropertiesSection } from "@/app/sections/featured-properties-section";
import { AboutSection } from "@/app/sections/about-section";
import { ServicesSection } from "@/app/sections/services-section";
import { ContactSection } from "@/app/sections/contact-section";
import { HowItWorksSection } from "@/app/sections/how-it-works-section";
import { StatsSection } from "@/app/sections/stats-section";
import { TestimonialsSection } from "@/app/sections/testimonials-section";
import { FaqSection } from "@/app/sections/faq-section";
import { AiToolsSection } from "@/app/sections/ai-tools-section";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCarsSection />
        <FeaturedPropertiesSection />
        <ServicesSection />
        <AiToolsSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="256700123456" />
      <ScrollToTopButton />
    </div>
  );
}
