import { apiClient } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

import { SpecialistCardList } from '~/entities/specialist';

export async function Specialists() {
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

  const { data: parentLink, error: parentLinkError } = await apiClient.GET(
    '/api/pages/sections/{section}/header',
    {
      params: {
        path: { section: 'questions' },
      },
    },
  );
  if (parentLinkError) return;

  const { data: content, error: contentError } = await apiClient.GET(
    '/api/pages/specialists',
  );
  if (contentError) return;

  return (
    <div>
      <Section headings={header.headings} parentLink={parentLink} type="main">
        <SpecialistCardList specialists={content.specialists} direction="up" />
      </Section>
    </div>
  );
}
