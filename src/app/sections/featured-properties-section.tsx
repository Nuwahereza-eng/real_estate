
import { PropertyCard } from "@/components/property-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

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
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&h=400&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&h=400&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&h=400&auto=format&fit=crop",
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
