import { useGetRandomizedSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { shuffleArray } from '~/shared/lib';
import { CarouselItem, CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { SpecialistCard } from '~/entities/specialist';

export function SpecialistsSection() {
  const { headings, href, items } =
    useGetRandomizedSpecialistsControllerExecuteSuspense();

  return (
    <Section headings={headings} href={href}>
      <CarouselWrapper
        variant={items.length > 3 ? 'downward' : 'default'}
        maxSlidesInView={4}
      >
        {shuffleArray(items).map((specialist, index) => (
          <CarouselItem index={index} key={specialist.alias}>
            <SpecialistCard specialist={specialist} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
