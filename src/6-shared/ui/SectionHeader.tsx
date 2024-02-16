import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

const sectionHeaderVariants = cva('*:w-full h-full', {
  variants: {
    variant: {
      light: 'lg:*:text-end lg:*:pl-0 font-bold',
      dark: '*:text-start *:pr-0 font-semibold',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

export type SectionHeadings = {
  primary: string;
  secondary: string;
};

type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionHeaderVariants> & {
    headings: SectionHeadings;
  };

export function SectionHeader({
  className,
  variant,
  children,
  headings,
  ...props
}: Props) {
  return (
    <section
      className={cn(sectionHeaderVariants({ variant, className }))}
      {...props}
    >
      <div className="mb-1 px-6 opacity-70 lg:mb-3 lg:px-12 lg:text-xl">
        {headings.secondary}
      </div>
      <h2 className="text-3xl tracking-tight lg:text-5xl">
        {headings.primary}
      </h2>
    </section>
  );
}
