import { DimensionAlias, apiClient } from '~/shared/api';
import { Section, SectionGroup } from '~/shared/ui/Section';

import { DimensionItemArticle } from '~/entities/dimension-item';

import { Posts } from '~/widgets/posts';
import { Specialists } from '~/widgets/specialists';

type Props = {
  dimensionAlias: DimensionAlias;
  itemAlias: string;
};

export async function DimensionItem({ dimensionAlias, itemAlias }: Props) {
  const { data, error } = await apiClient.GET(
    '/api/pages/dimensions/{dimension}/{dimensionItem}/main',
    {
      params: {
        path: { dimension: dimensionAlias, dimensionItem: itemAlias },
      },
    },
  );

  if (error) return;

  const { header, content } = data;

  return (
    <>
      <div>
        <Section
          headings={header.headings}
          parentLink={header.parentLink}
          type="main"
        >
          <DimensionItemArticle content={content.description} />
        </Section>
      </div>
      <SectionGroup>
        <Posts />
        <Specialists />
      </SectionGroup>
    </>
  );
}
