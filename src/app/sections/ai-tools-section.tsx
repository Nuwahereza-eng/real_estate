import { SectionContainer } from "@/components/ui/section-container";
import { SectionTitle } from "@/components/ui/section-title";
import { CarImportCostEstimatorForm } from "@/components/forms/car-import-cost-estimator-form";
import { PropertyRecommendationsForm } from "@/components/forms/property-recommendations-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AiToolsSection() {
  return (
    <SectionContainer id="ai-tools" className="bg-secondary">
      <SectionTitle>AI Powered Tools</SectionTitle>
      <Tabs defaultValue="cost-estimator" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="cost-estimator">Car Cost Estimator</TabsTrigger>
          <TabsTrigger value="property-recs">Property Finder</TabsTrigger>
        </TabsList>
        <TabsContent value="cost-estimator" className="animate-fadeInUp">
          <CarImportCostEstimatorForm />
        </TabsContent>
        <TabsContent value="property-recs" className="animate-fadeInUp">
          <PropertyRecommendationsForm />
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
}
