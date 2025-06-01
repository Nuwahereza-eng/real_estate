
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
    imageUrl: "https://images.unsplash.com/photo-1727908147407-fa90e969c4dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "suv toyota",
  },
  {
    name: "Honda Vezel 2019",
    year: 2019,
    mileage: "38,000 KM",
    origin: "Japan",
    fobPrice: "$16,200",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "suv honda",
  },
  {
    name: "BMW X5 2018",
    year: 2018,
    mileage: "52,000 KM",
    origin: "UAE",
    fobPrice: "$28,900",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJtd3xlbnwwfHwwfHx8MA%3D%3D",
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
