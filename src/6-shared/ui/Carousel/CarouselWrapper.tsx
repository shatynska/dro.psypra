import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../lib';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
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
    maxSlidesInView?: number;
  };

export function CarouselWrapper({
  variant,
  maxSlidesInView,
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
        maxSlidesInView={maxSlidesInView}
        className="sm:px-4"
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
