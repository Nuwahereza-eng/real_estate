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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { propertyRecommendations, type PropertyRecommendationsOutput } from "@/ai/flows/property-recommendations";
import { Loader2 } from "lucide-react";

const recommendationsFormSchema = z.object({
  location: z.string().min(1, "Location is required"),
  budget: z.string().min(1, "Budget is required"),
  propertyType: z.string().min(1, "Property type is required"),
});

type RecommendationsFormValues = z.infer<typeof recommendationsFormSchema>;

export function PropertyRecommendationsForm() {
  const [recommendations, setRecommendations] = useState<PropertyRecommendationsOutput['recommendations'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RecommendationsFormValues>({
    resolver: zodResolver(recommendationsFormSchema),
  });

  async function onSubmit(data: RecommendationsFormValues) {
    setIsLoading(true);
    setRecommendations(null);
    setError(null);
    try {
      const response = await propertyRecommendations(data);
      setRecommendations(response.recommendations);
    } catch (e) {
      setError("Failed to get recommendations. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">AI Property Recommendations</CardTitle>
        <CardDescription>Tell us your preferences, and our AI will find suitable properties.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Kololo, Ntinda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="UGX 50M - 100M">UGX 50M - 100M</SelectItem>
                      <SelectItem value="UGX 100M - 250M">UGX 100M - 250M</SelectItem>
                      <SelectItem value="UGX 250M - 500M">UGX 250M - 500M</SelectItem>
                      <SelectItem value="UGX 500M+">UGX 500M+</SelectItem>
                      <SelectItem value="UGX 1M - 2M (Rent)">UGX 1M - 2M (Rent)</SelectItem>
                       <SelectItem value="UGX 2M - 5M (Rent)">UGX 2M - 5M (Rent)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Recommendations
            </Button>
          </form>
        </Form>
      </CardContent>
      {error && (
        <CardFooter>
          <p className="text-sm text-destructive">{error}</p>
        </CardFooter>
      )}
      {recommendations && recommendations.length > 0 && (
        <CardFooter className="flex flex-col items-start space-y-4 pt-6 border-t">
          <h3 className="text-xl font-semibold text-primary">Recommendations:</h3>
          <ul className="space-y-4 w-full">
            {recommendations.map((rec, index) => (
              <li key={index} className="p-4 border rounded-md bg-secondary/50">
                <h4 className="font-semibold text-primary">{rec.propertyType} in {rec.location}</h4>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
                <p className="text-sm font-medium text-green-600">Price: {rec.price}</p>
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
      {recommendations && recommendations.length === 0 && (
         <CardFooter className="pt-6 border-t">
            <p className="text-muted-foreground">No recommendations found for your criteria. Please try different options.</p>
         </CardFooter>
      )}
    </Card>
  );
}
