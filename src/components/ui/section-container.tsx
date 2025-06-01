import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id, ...props }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 md:py-24", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
