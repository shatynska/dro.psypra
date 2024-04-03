import { apiClient } from '~/shared/api';
import { CarouselItem, CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { DimensionItemCard } from '~/entities/dimension-item';

export async function SpecialtiesSection() {
  const { data, error } = await apiClient.GET('/api/pages/home/{dimension}', {
    params: {
      path: { dimension: 'specialties' },
    },
  });

  if (error) return;

  const { header, content } = data;

  return (
    <Section
      headings={header.headings}
      href={header.href}
      background="dark"
      height="fixed"
    >
      <CarouselWrapper
        variant={content.items.length > 3 ? 'upward' : 'default'}
        maxSlidesInView={3}
      >
        {content.items.map((specialty, index) => (
          <CarouselItem index={index} key={specialty.alias}>
            <DimensionItemCard item={specialty} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
