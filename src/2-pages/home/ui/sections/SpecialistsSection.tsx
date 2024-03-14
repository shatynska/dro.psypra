import { useGetRandomizedSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { shuffleArray } from '~/shared/lib';
import { CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { SpecialistsSectionCards } from './SpecialistsSectionCards';

export function SpecialistsSection() {
  const { headings, href, items } =
    useGetRandomizedSpecialistsControllerExecuteSuspense();

  return (
    <Section headings={headings} href={href}>
      <CarouselWrapper variant={items.length > 3 ? 'downward' : 'default'}>
        <SpecialistsSectionCards specialists={shuffleArray(items)} />
      </CarouselWrapper>
    </Section>
  );
}
