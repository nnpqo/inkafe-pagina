import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12", centered ? "text-center" : "", className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-2">{title}</h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground max-w-2xl",
          centered ? "mx-auto" : null
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
