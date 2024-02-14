import { VariantProps, cva } from 'class-variance-authority';
import { Dispatch, SetStateAction } from 'react';

import { cn } from '../lib';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './Carousel';

const CarouselWrapperVariants = cva('w-full px-12', {
  variants: {
    variant: {
      default: 'lg:px-0 lg:[&_button]:hidden lg:[&>div]:px-0',
      upward: 'upward group',
      downward: 'downward group',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof CarouselWrapperVariants> & {
    setApi: Dispatch<SetStateAction<CarouselApi | undefined>>;
  };

export function CarouselWrapper({
  variant,
  setApi,
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(CarouselWrapperVariants({ variant, className }))}
      {...props}
    >
      <Carousel
        opts={{
          align: 'start',
        }}
        className="sm:px-4"
        setApi={setApi}
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
