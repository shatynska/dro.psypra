'use client';

import { DimensionItem } from '~/shared/api';
import { cn } from '~/shared/lib';
import { CarouselItem, useCarousel } from '~/shared/ui/Carousel';

import { DimensionItemCard } from '~/entities/dimension-item';

type Props = {
  items: DimensionItem[];
};

export function SpecialtiesSectionCards({ items }: Props) {
  const { selectedIndex } = useCarousel();

  return (
    <>
      {items.map((specialty, index) => (
        <CarouselItem
          key={specialty.alias}
          className={cn(
            'md:basis-1/2 lg:basis-1/3',
            'md:mb-16 md:transition md:duration-700 md:ease-in-out',
            selectedIndex >= index
              ? 'md:translate-y-16'
              : selectedIndex === index - 1
                ? 'md:translate-y-0 lg:translate-y-8'
                : 'md:translate-y-0',
          )}
        >
          <DimensionItemCard item={specialty} parentAlias="specialties" />
        </CarouselItem>
      ))}
    </>
  );
}
