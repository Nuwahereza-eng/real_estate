
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, MapPin, Wifi, Car as CarIcon, Ruler, Award, type LucideProps } from "lucide-react";
import type React from 'react';

// Define a mapping from string names to Lucide components
const iconComponents: { [key: string]: React.ElementType<LucideProps> } = {
  Bed,
  MapPin,
  Wifi,
  Car: CarIcon,
  Ruler,
  Award,
};

interface PropertyDetail {
  iconName: string;
  text: string;
}

interface PropertyCardProps {
  name: string;
  details: PropertyDetail[];
  price: string;
  actionText: string;
  imageUrl: string;
  imageHint: string;
}

export function PropertyCard({ name, details, price, actionText, imageUrl, imageHint }: PropertyCardProps) {
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
          {details.map((detail, index) => {
            const IconComponent = iconComponents[detail.iconName];
            if (!IconComponent) {
              return null;
            }
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="w-4 h-4 mr-2 text-accent" />
                <span>{detail.text}</span>
              </div>
            );
          })}
        </div>
        <p className="text-lg font-semibold text-green-600 mb-4">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => contactAgent(name)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {actionText}
        </Button>
      </CardFooter>
    </Card>
  );
}
