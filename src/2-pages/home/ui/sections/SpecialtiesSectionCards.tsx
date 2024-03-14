'use client';

import { DimensionItem } from '~/shared/api';
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
        <CarouselItem key={specialty.alias} index={index}>
          <DimensionItemCard item={specialty} parentAlias="specialties" />
        </CarouselItem>
      ))}
    </>
  );
}
