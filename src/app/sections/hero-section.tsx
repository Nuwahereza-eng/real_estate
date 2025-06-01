
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CarImportInquiryForm } from "@/components/forms/car-import-inquiry-form";
import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const scrollToProperties = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#properties");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center bg-primary pt-20">
        <div className="absolute inset-0">
           {/* Placeholder for image to avoid layout shift */}
        </div>
        <div className="relative z-10 text-center p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-gray-400 rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto"></div>
            <div className="flex justify-center gap-4 mt-8">
              <div className="h-12 bg-gray-400 rounded w-36"></div>
              <div className="h-12 bg-gray-400 rounded w-36"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-primary pt-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Luxury cars and homes background with abstract light trails"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="opacity-30"
          data-ai-hint="abstract light trails"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center p-4 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary-foreground mb-6 leading-tight">
          Your Gateway to Quality <br className="hidden sm:inline" />Cars & Properties
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Import premium vehicles from Japan, UAE, UK & US. Find your dream property in Uganda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                Import a Car
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] bg-card">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline text-primary">Car Import Inquiry</DialogTitle>
              </DialogHeader>
              <CarImportInquiryForm />
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="lg" onClick={scrollToProperties} className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
            Browse Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
