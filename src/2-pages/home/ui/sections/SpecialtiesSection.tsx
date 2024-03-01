'use client';

import { useGetSpecialtiesControllerExecuteSuspense } from '~/shared/api';
import { CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { SpecialtiesSectionCards } from './SpecialtiesSectionCards';

export function SpecialtiesSection() {
  const { headings, href, items } =
    useGetSpecialtiesControllerExecuteSuspense();

  return (
    <Section headings={headings} href={href} background="dark" height="fixed">
      <CarouselWrapper variant={items.length > 3 ? 'upward' : 'default'}>
        <SpecialtiesSectionCards items={items} />
      </CarouselWrapper>
    </Section>
  );
}
