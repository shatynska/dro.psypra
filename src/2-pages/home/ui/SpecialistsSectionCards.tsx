'use client';

import { Specialist } from '~/shared/api';
import { cn } from '~/shared/lib';
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
        <CarouselItem
          key={specialist.alias}
          className={cn(
            'sm:basis-1/2 lg:basis-1/3 xl:basis-1/4',
            'md:mb-16 md:transition md:duration-700 md:ease-in-out',
            selectedIndex >= index
              ? 'md:translate-y-0'
              : selectedIndex === index - 1
                ? 'md:translate-y-16 lg:translate-y-8 xl:translate-y-5'
                : selectedIndex === index - 2
                  ? 'md:translate-y-16 xl:translate-y-10'
                  : 'md:translate-y-16 xl:translate-y-[3.75rem]',
          )}
        >
          <SpecialistCard specialist={specialist} />
        </CarouselItem>
      ))}
    </>
  );
}
