import * as React from 'react';
import { cn } from '../../utils/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass hover-glow card',
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-3', className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('heading-lg', className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('body-text text-secondary', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('body-text', className)} {...props} />;
}


