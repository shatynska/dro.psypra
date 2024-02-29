import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../lib';

import { Logomark, Logotype } from './';

const logoVariants = cva('flex items-center', {
  variants: {
    variant: {
      default: '',
      header: 'gap-2 text-xs font-light leading-tight tracking-wide',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof logoVariants>;

export function Logo({ className, variant, ...props }: Props) {
  return (
    <div className={cn(logoVariants({ variant, className }))} {...props}>
      <Logomark variant={variant ?? 'default'} />
      <Logotype />
    </div>
  );
}
