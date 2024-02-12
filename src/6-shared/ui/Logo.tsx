import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../lib';

import { Logomark } from './Logomark';
import { Logotype } from './Logotype';

const logoVariants = cva('flex items-center', {
  variants: {
    variant: {
      default: '',
      header: 'text-xs leading-tight gap-2',
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
