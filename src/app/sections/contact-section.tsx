import { ContactForm } from "@/components/forms/contact-form";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const contactItems = [
  { iconClass: "fas fa-phone", text: "+256 700 123 456", href: "tel:+256700123456" },
  { iconClass: "fab fa-whatsapp", text: "+256 700 123 456", href: "https://wa.me/256700123456" },
  { iconClass: "fas fa-envelope", text: "info@elitemotorsproperties.ug", href: "mailto:info@elitemotorsproperties.ug" },
  { iconClass: "fas fa-map-marker-alt", text: "Kampala, Uganda" },
  { iconClass: "fab fa-facebook", text: "Elite Motors & Properties", href: "https://facebook.com" }, // Replace with actual link
  { iconClass: "fab fa-instagram", text: "@elitemotorsproperties", href: "https://instagram.com" }, // Replace with actual link
];

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="bg-primary text-primary-foreground">
      <SectionTitle className="text-primary-foreground">Get in Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-primary/80 p-8 rounded-lg shadow-xl animate-fadeInUp">
          <h3 className="text-2xl font-headline font-semibold mb-6">Send us a Message</h3>
          <ContactForm />
        </div>
        <div className="animate-fadeInUp md:pl-8">
          <h3 className="text-2xl font-headline font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center text-lg">
                <i className={`${item.iconClass} w-6 text-accent mr-4`}></i>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
