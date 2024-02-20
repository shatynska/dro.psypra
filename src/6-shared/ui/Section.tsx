import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { cn } from '../lib';

import { SectionHeader, type SectionHeadings } from './SectionHeader';
import { Skeleton } from './Skeleton';

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
    href?: string;
  };

export function Section({
  className,
  variant,
  height,
  headings,
  href,
  children,
  ...props
}: Props) {
  // TODO Add fallback to ErrorBoundary

  return (
    <ErrorBoundary fallback={null}>
      <Suspense
        fallback={<Skeleton className="mx-36 mb-16 mt-36 flex min-h-16" />}
      >
        <section
          className={cn(sectionVariants({ variant, className }))}
          {...props}
        >
          {href ? (
            <Link href={href}>
              <SectionHeader variant={variant} headings={headings} />
            </Link>
          ) : (
            <SectionHeader variant={variant} headings={headings} />
          )}
          <div className="flex flex-col justify-center">{children}</div>
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}
