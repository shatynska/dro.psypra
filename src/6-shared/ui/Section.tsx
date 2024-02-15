import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

import { SectionHeader, type SectionHeadings } from './SectionHeader';

const sectionVariants = cva(
  'relative h-full grid-cols-1 py-12 lg:py-24 grid grid-rows-[6rem_22rem] lg:grid-rows-[8rem_20rem]',
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

type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> &
  SectionHeadings;

export function Section({
  className,
  variant,
  children,
  headings,
  ...props
}: Props) {
  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      <SectionHeader variant={variant} headings={headings} />
      <div className="flex h-full justify-center">{children}</div>
    </section>
  );
}
