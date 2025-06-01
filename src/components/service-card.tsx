import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  iconClass: string; // Font Awesome icon class
  title: string;
  description: string;
}

export function ServiceCard({ iconClass, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <i className={`${iconClass} text-4xl text-accent`}></i>
        </div>
        <CardTitle className="text-xl font-headline text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
