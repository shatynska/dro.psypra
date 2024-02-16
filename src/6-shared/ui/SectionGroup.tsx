import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

const sectionGroupVariants = cva(
  'bg-gradient-to-b bg-[length:100%_34rem] lg:bg-[length:auto]',
  {
    variants: {
      variant: {
        blue: 'from-blue-gradient-dark to-blue-gradient-light lg:bg-[url("/images/blue-fon.svg")]',
        red: 'from-red-gradient-dark to-red-gradient-light lg:bg-[url("/images/red-fon.svg")]',
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  },
);

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sectionGroupVariants>;

// TODO Find a more correct name that reveals switching backgrounds
export function SectionGroup({
  className,
  variant,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(sectionGroupVariants({ variant, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
