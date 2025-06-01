'use server';

/**
 * @fileOverview Provides personalized property recommendations based on user preferences.
 *
 * - propertyRecommendations - A function that returns property recommendations.
 * - PropertyRecommendationsInput - The input type for the propertyRecommendations function.
 * - PropertyRecommendationsOutput - The return type for the propertyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PropertyRecommendationsInputSchema = z.object({
  location: z.string().describe('The preferred location for the property.'),
  budget: z.string().describe('The budget range for the property (e.g., "$500,000 - $750,000").'),
  propertyType: z.string().describe('The type of property desired (e.g., "house", "apartment", "land").'),
});
export type PropertyRecommendationsInput = z.infer<typeof PropertyRecommendationsInputSchema>;

const PropertyRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      propertyType: z.string().describe('The type of property.'),
      location: z.string().describe('The location of the property.'),
      description: z.string().describe('A brief description of the property.'),
      price: z.string().describe('The price of the property.'),
    })
  ).describe('A list of property recommendations based on the user preferences.')
});
export type PropertyRecommendationsOutput = z.infer<typeof PropertyRecommendationsOutputSchema>;

export async function propertyRecommendations(input: PropertyRecommendationsInput): Promise<PropertyRecommendationsOutput> {
  return propertyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'propertyRecommendationsPrompt',
  input: {schema: PropertyRecommendationsInputSchema},
  output: {schema: PropertyRecommendationsOutputSchema},
  prompt: `You are an expert real estate agent specializing in Uganda properties.

  Based on the user's preferences, provide a list of personalized property recommendations.

  Preferences:
  - Location: {{{location}}}
  - Budget: {{{budget}}}
  - Property Type: {{{propertyType}}}

  Ensure the recommendations align with legal and ethical standards.

  Recommendations:
  {{output}}
`,
});

const propertyRecommendationsFlow = ai.defineFlow(
  {
    name: 'propertyRecommendationsFlow',
    inputSchema: PropertyRecommendationsInputSchema,
    outputSchema: PropertyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
