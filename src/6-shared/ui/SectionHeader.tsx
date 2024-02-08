import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/shared/lib';

const sectionVariants = cva('relative h-40 *:w-full *:font-bold', {
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

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  headings: {
    main: string;
    small?: string;
    big?: string;
  };
}

export function SectionHeader(sectionHeaderProps: SectionHeaderProps) {
  const { className, variant, children, headings, ...props } =
    sectionHeaderProps;

  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      <div
        className={cn(
          'my-4 px-4 text-sm font-bold opacity-60 lg:px-8 lg:text-2xl',
        )}
      >
        {headings.small}
      </div>
      <div className="absolute top-0 px-28 text-5xl opacity-5 lg:px-80 lg:text-8xl">
        {headings.big}
      </div>
      <h2 className="text-3xl lg:text-[3.5rem]"> {headings.main}</h2>
    </section>
  );
}
