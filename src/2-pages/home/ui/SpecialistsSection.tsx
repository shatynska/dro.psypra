'use client';

import { useEffect, useState } from 'react';

import {
  Specialist,
  useGetRandomizedSpecialistsControllerExecuteSuspense,
} from '~/shared/api';
import { CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { SpecialistsSectionCards } from './SpecialistsSectionCards';

export function SpecialistsSection() {
  const { headings, href, items } =
    useGetRandomizedSpecialistsControllerExecuteSuspense();

  const [specialists, setSpecialists] = useState<Specialist[]>([]);

  useEffect(() => {
    setSpecialists(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section headings={headings} href={href}>
      <CarouselWrapper
        variant={specialists.length > 3 ? 'downward' : 'default'}
      >
        <SpecialistsSectionCards specialists={specialists} />
      </CarouselWrapper>
    </Section>
  );
}
