'use client';

import { Specialist } from '~/shared/api';
import { CarouselItem, useCarousel } from '~/shared/ui/Carousel';

import { SpecialistCard } from '~/entities/specialist';

type Props = {
  specialists: Specialist[];
};

export function SpecialistsSectionCards({ specialists }: Props) {
  const { selectedIndex } = useCarousel();

  return (
    <>
      {specialists.map((specialist, index) => (
        <CarouselItem key={specialist.alias} index={index}>
          <SpecialistCard specialist={specialist} />
        </CarouselItem>
      ))}
    </>
  );
}
