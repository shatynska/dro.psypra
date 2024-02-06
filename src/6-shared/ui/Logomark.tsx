import Image from 'next/image';

import logomarkLg from '/public/images/logomark-lg.svg';
import logomarkSm from '/public/images/logomark-sm.svg';
import logomarkXs from '/public/images/logomark-xs.svg';

import { cn } from '../lib';

type Props = React.HTMLAttributes<HTMLImageElement> & {
  size?: 'xs' | 'sm' | 'lg';
};

export function Logomark(props: Props) {
  const { size = 'xs', className } = props;

  const sizes = new Map([
    ['xs', logomarkXs],
    ['sm', logomarkSm],
    ['lg', logomarkLg],
  ]);

  const src = sizes.get(size);

  return (
    <Image
      src={src}
      alt="Лого"
      className={cn('object-contain', { className })}
    />
  );
}
