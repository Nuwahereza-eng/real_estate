"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const carImportFormSchema = z.object({
  carMake: z.string().optional(),
  carModel: z.string().optional(),
  yearRange: z.string().optional(),
  budget: z.string().optional(),
  country: z.string().optional(),
  clientName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  clientPhone: z.string().min(10, { message: "Phone number is required." }),
});

type CarImportFormValues = z.infer<typeof carImportFormSchema>;

export function CarImportInquiryForm({ onSuccess }: { onSuccess?: () => void }) {
  const { toast } = useToast();
  const form = useForm<CarImportFormValues>({
    resolver: zodResolver(carImportFormSchema),
    defaultValues: {
      carMake: "",
      carModel: "",
      yearRange: "",
      budget: "",
      country: "",
      clientName: "",
      clientPhone: "",
    },
  });

  function onSubmit(data: CarImportFormValues) {
    const message = `Car Import Inquiry:
Name: ${data.clientName}
Phone: ${data.clientPhone}
Make: ${data.carMake || 'N/A'}
Model: ${data.carModel || 'N/A'}
Year Range: ${data.yearRange || 'N/A'}
Budget: ${data.budget || 'N/A'}
Preferred Country: ${data.country || 'Any'}`;

    const whatsappUrl = `https://wa.me/256700123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Inquiry Sent!",
      description: "Your car import inquiry has been prepared for WhatsApp.",
    });
    form.reset();
    if (onSuccess) onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="carMake"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Make</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Toyota, Honda, BMW" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="carModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Harrier, Vezel, X5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="yearRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year Range</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Year Range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2020-2024">2020-2024</SelectItem>
                    <SelectItem value="2015-2019">2015-2019</SelectItem>
                    <SelectItem value="2010-2014">2010-2014</SelectItem>
                    <SelectItem value="2005-2009">2005-2009</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget (USD)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Budget Range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                    <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
                    <SelectItem value="30000+">$30,000+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="uae">UAE</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Submit Inquiry</Button>
      </form>
    </Form>
  );
}
