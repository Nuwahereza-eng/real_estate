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
import { estimateCarImportCost, type EstimateCarImportCostOutput } from "@/ai/flows/car-import-cost-estimator";
import { Loader2 } from "lucide-react";

const estimatorFormSchema = z.object({
  carModel: z.string().min(1, "Car model is required"),
  originCountry: z.string().min(1, "Origin country is required"),
  fobPrice: z.coerce.number().min(1, "FOB price must be positive"),
  importDutyPercentage: z.coerce.number().min(0).max(100).optional(),
  shippingCost: z.coerce.number().min(0).optional(),
  clearanceCost: z.coerce.number().min(0).optional(),
});

type EstimatorFormValues = z.infer<typeof estimatorFormSchema>;

export function CarImportCostEstimatorForm() {
  const [result, setResult] = useState<EstimateCarImportCostOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<EstimatorFormValues>({
    resolver: zodResolver(estimatorFormSchema),
    defaultValues: {
      importDutyPercentage: 25,
    },
  });

  async function onSubmit(data: EstimatorFormValues) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await estimateCarImportCost(data);
      setResult(response);
    } catch (e) {
      setError("Failed to estimate cost. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">AI Car Import Cost Estimator</CardTitle>
        <CardDescription>Enter car details to get an estimated import cost.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="carModel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Car Model</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Toyota Prado TX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="originCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Origin Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="uae">UAE</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="fobPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FOB Price (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 15000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="importDutyPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Import Duty (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Default 25" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shipping Cost (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clearanceCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Clearance Cost (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Estimate Cost
            </Button>
          </form>
        </Form>
      </CardContent>
      {error && (
        <CardFooter>
          <p className="text-sm text-destructive">{error}</p>
        </CardFooter>
      )}
      {result && (
        <CardFooter className="flex flex-col items-start space-y-4 pt-6 border-t">
          <h3 className="text-xl font-semibold text-primary">Estimation Result:</h3>
          <p className="text-2xl font-bold text-green-600">
            Total Estimated Cost: ${result.estimatedCost.toLocaleString()}
          </p>
          <div className="w-full space-y-1 text-muted-foreground">
            <p><strong>FOB Price:</strong> ${result.costBreakdown.fobPrice.toLocaleString()}</p>
            <p><strong>Shipping Cost:</strong> ${result.costBreakdown.shippingCost.toLocaleString()}</p>
            <p><strong>Clearance Cost:</strong> ${result.costBreakdown.clearanceCost.toLocaleString()}</p>
            <p><strong>Import Duty:</strong> ${result.costBreakdown.importDuty.toLocaleString()}</p>
          </div>
          {result.notes && <p className="text-sm italic text-muted-foreground">{result.notes}</p>}
        </CardFooter>
      )}
    </Card>
  );
}
