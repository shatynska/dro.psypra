import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

import { SectionHeadings } from './Section';

const sectionVariants = cva('relative h-full *:w-full *:font-bold', {
  variants: {
    variant: {
      light: '*:text-end *:pl-0',
      dark: '*:text-start *:pr-0 ',
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
        <div className="my-4 px-4 text-sm font-bold opacity-60 lg:px-8 lg:text-2xl">
          {headings.small}
        </div>
      )}
      {headings.big && (
        <div className="absolute top-0 px-28 text-5xl opacity-5 lg:px-80 lg:text-8xl">
          {headings.big}
        </div>
      )}
      <h2 className="text-3xl lg:text-[3.5rem]">{headings.main}</h2>
    </section>
  );
}
