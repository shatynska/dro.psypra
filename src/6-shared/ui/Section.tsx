import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/shared/lib';

import { SectionHeader } from './SectionHeader';

const sectionVariants = cva(
  'relative mt-24 mb-32 lg:mt-24 grid grid-rows-[8rem_28rem] items-center ',
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

export type SectionHeadings = {
  headings: {
    main: string;
    small?: string;
    big?: string;
  };
};

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
      <div className="flex flex-col items-center">{children}</div>
    </section>
  );
}
