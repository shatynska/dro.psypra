import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

import { SectionHeader, type SectionHeadings } from './SectionHeader';

const sectionVariants = cva(
  'relative h-full grid-cols-1 py-12 lg:py-24 grid grid-rows-[6rem_minmax(22rem,auto)] lg:grid-rows-[8rem_minmax(20rem,auto)]',
  {
    variants: {
      variant: {
        light: 'text-foreground',
        dark: 'text-background ',
      },
      height: {
        fixed: '[&>div]:align-center',
        default: '',
      },
    },
    defaultVariants: {
      variant: 'light',
      height: 'default',
    },
  },
);

type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    headings: SectionHeadings;
  };

export function Section({
  className,
  variant,
  height,
  children,
  headings,
  ...props
}: Props) {
  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      <SectionHeader variant={variant} headings={headings} />
      <div className="flex flex-col justify-center">{children}</div>
    </section>
  );
}
