import { useGetSpecialtiesControllerExecuteSuspense } from '~/shared/api';
import { CarouselItem, CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { DimensionItemCard } from '~/entities/dimension-item';

export function SpecialtiesSection() {
  const { headings, href, items } =
    useGetSpecialtiesControllerExecuteSuspense();

  return (
    <Section headings={headings} href={href} background="dark" height="fixed">
      <CarouselWrapper
        variant={items.length > 3 ? 'upward' : 'default'}
        maxSlidesInView={3}
      >
        {items.map((specialty, index) => (
          <CarouselItem index={index} key={specialty.alias}>
            <DimensionItemCard item={specialty} parentAlias="specialties" />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
