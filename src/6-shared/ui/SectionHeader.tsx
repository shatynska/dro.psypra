import { cva, VariantProps } from 'class-variance-authority';

import { Headings } from '../api';
import { cn } from '../lib';

const sectionHeaderVariants = cva('*:w-full h-full font-semibold', {
  variants: {
    level: {
      pageTitle:
        'h-24 text-lg font-bold lg:h-32 lg:text-2xl [&_h1]:mt-1 [&_h1]:text-3xl lg:[&_h1]:mt-2 [&_h1]:lg:text-5xl',
      sectionTitle:
        'text-base lg:text-xl [&_h2]:mt-1 [&_h2]:text-2xl lg:[&_h2]:mt-2 [&_h2]:lg:text-4xl',
      subTitle:
        'h-auto text-xl tracking-tight opacity-80 lg:text-2xl [&_[role="doc-subtitle"]]:text-sm',
    },
    side: {
      left: '*:pr-0',
      right: '*:text-end *:pl-0 font-bold',
    },
  },
  compoundVariants: [
    {
      level: 'sectionTitle',
      side: 'right',
      class:
        '*:text-start lg:*:text-end [&_[role="doc-subtitle"]]:px-6 [&_h2]:pr-0',
    },
  ],
  defaultVariants: {
    level: 'sectionTitle',
    side: 'left',
  },
});

type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionHeaderVariants> & {
    headings: Headings;
  };

export function SectionHeader({
  headings,
  level = 'sectionTitle',
  side,
  className,
  children,
  ...props
}: Props) {
  return (
    <header
      className={cn(sectionHeaderVariants({ level, side, className }))}
      {...props}
    >
      <p role="doc-subtitle" className="px-6 opacity-70 lg:px-12 lg:text-xl">
        {headings.secondary}
      </p>
      {level === 'pageTitle' ? (
        <h1 className="tracking-tight">{headings.primary}</h1>
      ) : level === 'sectionTitle' ? (
        <h2 className="tracking-tight">{headings.primary}</h2>
      ) : (
        <p className="tracking-tight">{headings.primary}</p>
      )}
    </header>
  );
}
