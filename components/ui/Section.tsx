"use client";
import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  title?: string;
  subtitle?: string;
  id?: string;
};

export function Section({ title, subtitle, className, id, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('section-y', className)} {...props}>
      <div className="container-max">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <motion.h2
                className="heading-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="body-text text-secondary mt-3 max-w-2xl"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.25, ease: 'easeInOut', delay: 0.05 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


