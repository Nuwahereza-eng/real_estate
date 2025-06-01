'use server';

/**
 * @fileOverview An AI agent for estimating car import costs.
 *
 * - estimateCarImportCost - A function that handles the car import cost estimation process.
 * - EstimateCarImportCostInput - The input type for the estimateCarImportCost function.
 * - EstimateCarImportCostOutput - The return type for the estimateCarImportCost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateCarImportCostInputSchema = z.object({
  carModel: z.string().describe('The model of the car to be imported.'),
  originCountry: z.string().describe('The country from which the car is being imported.'),
  fobPrice: z.number().describe('The Free on Board (FOB) price of the car in USD.'),
  importDutyPercentage: z.number().default(25).describe('The import duty percentage.'),
  shippingCost: z.number().optional().describe('The shipping cost of the car in USD. If not provided, a default value will be used based on origin country.'),
  clearanceCost: z.number().optional().describe('The clearance cost of the car in USD. If not provided, a default value will be used based on origin country.'),
});
export type EstimateCarImportCostInput = z.infer<typeof EstimateCarImportCostInputSchema>;

const EstimateCarImportCostOutputSchema = z.object({
  estimatedCost: z
    .number()
    .describe('The estimated total cost of importing the car, including FOB price, shipping, clearance, and import duty.'),
  costBreakdown: z.object({
    fobPrice: z.number().describe('The Free on Board (FOB) price of the car.'),
    shippingCost: z.number().describe('The shipping cost.'),
    clearanceCost: z.number().describe('The clearance cost.'),
    importDuty: z.number().describe('The import duty.'),
  }).describe('A breakdown of the estimated costs.'),
  notes: z.string().optional().describe('Any additional notes or disclaimers.'),
});
export type EstimateCarImportCostOutput = z.infer<typeof EstimateCarImportCostOutputSchema>;

export async function estimateCarImportCost(input: EstimateCarImportCostInput): Promise<EstimateCarImportCostOutput> {
  return estimateCarImportCostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimateCarImportCostPrompt',
  input: {schema: EstimateCarImportCostInputSchema},
  output: {schema: EstimateCarImportCostOutputSchema},
  prompt: `You are an expert in estimating car import costs, including taxes, shipping, and clearance fees. Based on the provided information, calculate the estimated total cost of importing the car. Assume all costs are in USD.

Car Model: {{{carModel}}}
Origin Country: {{{originCountry}}}
FOB Price: {{{fobPrice}}}
Import Duty Percentage: {{{importDutyPercentage}}}
Shipping Cost: {{{shippingCost}}}
Clearance Cost: {{{clearanceCost}}}

Calculate the estimated cost and provide a breakdown of the costs. If shippingCost or clearanceCost is missing, use these defaults based on originCountry:

Japan: shippingCost=1200, clearanceCost=800
UAE: shippingCost=800, clearanceCost=600
UK: shippingCost=1500, clearanceCost=900
US: shippingCost=1800, clearanceCost=1000
Other: shippingCost=1500, clearanceCost=900

Make sure the output is in valid JSON format.
`,
});

const estimateCarImportCostFlow = ai.defineFlow(
  {
    name: 'estimateCarImportCostFlow',
    inputSchema: EstimateCarImportCostInputSchema,
    outputSchema: EstimateCarImportCostOutputSchema,
  },
  async input => {
    // Apply default shipping and clearance costs if not provided
    let {
      originCountry,
      fobPrice,
      importDutyPercentage,
      shippingCost,
      clearanceCost,
    } = input;

    switch (originCountry) {
      case 'japan':
        shippingCost = shippingCost ?? 1200;
        clearanceCost = clearanceCost ?? 800;
        break;
      case 'uae':
        shippingCost = shippingCost ?? 800;
        clearanceCost = clearanceCost ?? 600;
        break;
      case 'uk':
        shippingCost = shippingCost ?? 1500;
        clearanceCost = clearanceCost ?? 900;
        break;
      case 'us':
        shippingCost = shippingCost ?? 1800;
        clearanceCost = clearanceCost ?? 1000;
        break;
      default:
        shippingCost = shippingCost ?? 1500;
        clearanceCost = clearanceCost ?? 900;
    }

    const importDuty = fobPrice * (importDutyPercentage / 100);
    const estimatedCost = fobPrice + shippingCost + clearanceCost + importDuty;

    const output: EstimateCarImportCostOutput = {
      estimatedCost: estimatedCost,
      costBreakdown: {
        fobPrice: fobPrice,
        shippingCost: shippingCost,
        clearanceCost: clearanceCost,
        importDuty: importDuty,
      },
      notes: 'This is an estimated cost. Actual costs may vary.',
    };

    return output;
  }
);
