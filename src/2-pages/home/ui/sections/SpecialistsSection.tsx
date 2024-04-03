import { apiClient } from '~/shared/api';
import { shuffleArray } from '~/shared/lib';
import { CarouselItem, CarouselWrapper } from '~/shared/ui/Carousel';
import { Section } from '~/shared/ui/Section';

import { SpecialistCard } from '~/entities/specialist';

export async function SpecialistsSection() {
  // TODO Refactor querying
  const { data: header, error: headerError } = await apiClient.GET(
    '/api/pages/sections/{section}/header',
    {
      params: {
        path: { section: 'specialists' },
      },
    },
  );
  if (headerError) return;

  const { data: content, error: contentError } = await apiClient.GET(
    '/api/pages/specialists',
  );
  if (contentError) return;

  return (
    <Section headings={header.headings} href={header.href}>
      <CarouselWrapper
        variant={content.specialists.length > 3 ? 'downward' : 'default'}
        maxSlidesInView={4}
      >
        {shuffleArray(content.specialists).map((specialist, index) => (
          <CarouselItem index={index} key={specialist.alias}>
            <SpecialistCard specialist={specialist} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
