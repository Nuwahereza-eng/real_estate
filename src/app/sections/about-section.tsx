
import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-background">
      <SectionTitle>About Us</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeInUp space-y-6 text-lg text-foreground/80">
          <h3 className="text-2xl font-headline font-semibold text-primary">Your Trusted Partner in Uganda</h3>
          <p>With over 8 years of experience in car importation and real estate, we've helped hundreds of clients acquire their dream vehicles and properties. Our expertise spans across major auction houses in Japan, UAE, UK, and the US, ensuring you get the best deals on quality vehicles.</p>
          <p>In real estate, we specialize in residential and commercial properties across Kampala and surrounding areas. From luxury homes to investment properties, we provide comprehensive services tailored to your needs.</p>
          <p>Our commitment to transparency, reliability, and customer satisfaction has made us a trusted name in Uganda's automotive and real estate sectors.</p>
        </div>
        <div className="animate-fadeInUp md:order-first">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&h=600&auto=format&fit=crop"
              alt="About Us Image - Business team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
              data-ai-hint="business team"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
