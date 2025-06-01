
import { PropertyCard } from "@/components/property-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";
// Removed Lucide icon imports as they are no longer directly passed

const properties = [
  {
    name: "Modern 3BR House - Najjera",
    details: [
      { iconName: "Bed", text: "3 Bedrooms, 2 Bathrooms" },
      { iconName: "MapPin", text: "Najjera, Kampala" },
      { iconName: "Car", text: "Parking Available" },
    ],
    price: "UGX 450M",
    actionText: "View Details",
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568.png?text=Modern+House",
    imageHint: "modern house exterior",
  },
  {
    name: "2BR Apartment - Ntinda",
    details: [
      { iconName: "Bed", text: "2 Bedrooms, 1 Bathroom" },
      { iconName: "MapPin", text: "Ntinda, Kampala" },
      { iconName: "Wifi", text: "Furnished" },
    ],
    price: "UGX 1.2M/month",
    actionText: "Rent Now",
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568.png?text=Apartment+Building",
    imageHint: "apartment building",
  },
  {
    name: "Prime Land - Wakiso",
    details: [
      { iconName: "Ruler", text: "50x100 ft" },
      { iconName: "MapPin", text: "Wakiso District" },
      { iconName: "Award", text: "Ready Title" },
    ],
    price: "UGX 35M",
    actionText: "Buy Now",
    imageUrl: "https://placehold.co/600x400/E2E8F0/4A5568.png?text=Land+Plot",
    imageHint: "land plot green",
  },
];

export function FeaturedPropertiesSection() {
  return (
    <SectionContainer id="properties" className="bg-background">
      <SectionTitle>Featured Properties</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <div key={prop.name} className="animate-fadeInUp">
            <PropertyCard {...prop} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
