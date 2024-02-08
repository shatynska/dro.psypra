import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/shared/lib';

import { SectionHeader } from './SectionHeader';

const sectionVariants = cva(
  'relative mt-12 mb-16 lg:mt-24 grid grid-rows-[10rem_30rem] items-center ',
  {
    variants: {
      variant: {
        light: 'text-foreground',
        dark: 'text-background ',
      },
    },
    defaultVariants: {
      variant: 'light',
    },
  },
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  headings: {
    main: string;
    small?: string;
    big?: string;
  };
}

export function Section(sectionProps: SectionProps) {
  const { className, variant, children, headings, ...props } = sectionProps;

  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      <SectionHeader variant={variant} headings={headings} />
      {children}
    </section>
  );
}
