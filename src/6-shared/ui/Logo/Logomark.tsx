import Image from 'next/image';

import logomarkLg from '/public/images/logomark-lg.svg';
import logomarkSm from '/public/images/logomark-sm.svg';
import logomarkXs from '/public/images/logomark-xs.svg';

import { cn } from '../../lib';

type Props = React.HTMLAttributes<HTMLImageElement> & {
  variant?: 'default' | 'header' | 'hero';
};

const variants = new Map([
  ['default', logomarkSm],
  ['header', logomarkXs],
  ['hero', logomarkLg],
]);

export function Logomark({ variant = 'default', className, ...props }: Props) {
  return (
    <Image
      src={variants.get(variant)}
      alt="Лого"
      className={cn('object-cover object-left-bottom', {
        className,
      })}
      {...props}
    />
  );
}
