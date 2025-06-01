import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-6 relative">
        <i className="fas fa-quote-right text-3xl text-accent opacity-50 absolute top-4 right-4"></i>
        <p className="italic text-foreground/80 mb-4 leading-relaxed">"{quote}"</p>
        <p className="font-semibold text-primary text-right">- {author}</p>
      </CardContent>
    </Card>
  );
}
