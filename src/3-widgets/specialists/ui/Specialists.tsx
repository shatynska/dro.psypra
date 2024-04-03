import { apiClient } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

import { SpecialistCardList } from '~/entities/specialist';

export async function Specialists() {
  // TODO Add filtering
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
      <SpecialistCardList specialists={content.specialists} />
    </Section>
  );
}
