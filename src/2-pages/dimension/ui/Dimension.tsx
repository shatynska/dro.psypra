import Link from 'next/link';

import { DimensionAlias, apiClient } from '~/shared/api';
import { Section, SectionGroup } from '~/shared/ui/Section';

import { DimensionItemArticle } from '~/entities/dimension-item';

import { Posts } from '~/widgets/posts';
import { Specialists } from '~/widgets/specialists';

type Props = {
  alias: DimensionAlias;
};

export async function Dimension({ alias }: Props) {
  const { data, error } = await apiClient.GET(
    '/api/pages/dimensions/{dimension}/main',
    {
      params: {
        path: { dimension: alias },
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
          {content.items &&
            content.items.map((item) => (
              <Link key={item.alias} href={item.href}>
                <DimensionItemArticle
                  title={item.title}
                  content={item.description}
                />
              </Link>
            ))}
        </Section>
      </div>
      <SectionGroup>
        <Posts />
        <Specialists />
      </SectionGroup>
    </>
  );
}
