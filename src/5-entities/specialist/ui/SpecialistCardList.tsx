import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { Specialist } from '~/shared/api';
import { cn } from '~/shared/lib';

import { SpecialistCard } from '.';

const specialistCardListVariants = cva(
  'grid gap-x-8 gap-y-8 md:gap-y-16 pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ',
  {
    variants: {
      direction: {
        up: 'md:[&>:nth-child(3n)]:top-0 md:[&>:nth-child(3n+1)]:top-16 md:[&>:nth-child(3n+2)]:top-8 lg:[&>:nth-child(4n)]:top-0 lg:[&>:nth-child(4n+1)]:top-18 lg:[&>:nth-child(4n+2)]:top-12 lg:[&>:nth-child(4n+3)]:top-6',
        down: 'md:[&>:nth-child(3n)]:top-16 md:[&>:nth-child(3n+1)]:top-0 md:[&>:nth-child(3n+2)]:top-8 lg:[&>:nth-child(4n)]:top-18 lg:[&>:nth-child(4n+1)]:top-0 lg:[&>:nth-child(4n+2)]:top-6 lg:[&>:nth-child(4n+3)]:top-12',
      },
    },
    defaultVariants: {
      direction: 'down',
    },
  },
);

type Props = HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof specialistCardListVariants> & {
    items: Specialist[];
  };

export function SpecialistCardList({
  items,
  direction,
  className,
  ...props
}: Props) {
  return (
    <ul
      className={cn(specialistCardListVariants({ direction }), className)}
      {...props}
    >
      {items.map((specialist) => (
        <li className="relative" key={specialist.alias}>
          <SpecialistCard specialist={specialist} />
        </li>
      ))}
    </ul>
  );
}
