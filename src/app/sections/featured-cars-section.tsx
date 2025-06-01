
import { CarCard } from "@/components/car-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";

const cars = [
  {
    name: "Toyota Harrier 2020",
    year: 2020,
    mileage: "45,000 KM",
    origin: "Japan",
    fobPrice: "$18,500",
    imageUrl: "https://images.unsplash.com/photo-1617531037849-d0c155150016?q=80&w=600&h=400&auto=format&fit=crop",
    imageHint: "suv toyota",
  },
  {
    name: "Honda Vezel 2019",
    year: 2019,
    mileage: "38,000 KM",
    origin: "Japan",
    fobPrice: "$16,200",
    imageUrl: "https://images.unsplash.com/photo-1618843400516-ec1dcae01726?q=80&w=600&h=400&auto=format&fit=crop",
    imageHint: "suv honda",
  },
  {
    name: "BMW X5 2018",
    year: 2018,
    mileage: "52,000 KM",
    origin: "UAE",
    fobPrice: "$28,900",
    imageUrl: "https://images.unsplash.com/photo-1555353544-7ac5ac83590c?q=80&w=600&h=400&auto=format&fit=crop",
    imageHint: "suv bmw",
  },
];

export function FeaturedCarsSection() {
  return (
    <SectionContainer id="cars" className="bg-secondary">
      <SectionTitle>Featured Vehicles</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.name} className="animate-fadeInUp">
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
