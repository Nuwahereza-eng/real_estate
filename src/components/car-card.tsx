
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CalendarDays, Gauge } from "lucide-react";

interface CarCardProps {
  name: string;
  year: number;
  mileage: string;
  origin: string;
  fobPrice: string;
  imageUrl: string;
  imageHint: string;
}

export function CarCard({ name, year, mileage, origin, fobPrice, imageUrl, imageHint }: CarCardProps) {
  const contactAgent = (itemName: string) => {
    const message = `Hi! I'm interested in the ${itemName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/256700123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-headline text-primary mb-3">{name}</CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2 text-accent" />
            <span>Year: {year}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="w-4 h-4 mr-2 text-accent" />
            <span>Mileage: {mileage}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-accent" />
            <span>Origin: {origin}</span>
          </div>
        </div>
        <p className="text-lg font-semibold text-destructive mb-4">FOB: {fobPrice}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => contactAgent(name)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Inquire Now
        </Button>
      </CardFooter>
    </Card>
  );
}
