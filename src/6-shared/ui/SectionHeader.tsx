import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

import { SectionHeadings } from './Section';

const sectionVariants = cva('relative *:w-full', {
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

type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> &
  SectionHeadings;

export function SectionHeader({
  className,
  variant,
  children,
  headings,
  ...props
}: Props) {
  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      {headings.small && (
        <div className="mb-2 px-8 text-sm opacity-70 lg:mb-4 lg:px-12 lg:text-xl">
          {headings.small}
        </div>
      )}
      {headings.big && (
        <div className="absolute top-1 hidden overflow-hidden whitespace-nowrap px-80 text-7xl font-extrabold tracking-tight opacity-5 lg:block">
          {headings.big}
        </div>
      )}
      <h2 className="text-3xl tracking-tight lg:text-5xl">{headings.main}</h2>
    </section>
  );
}
