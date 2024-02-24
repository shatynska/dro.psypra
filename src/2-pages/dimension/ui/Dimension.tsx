import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

import {
  DimensionAlias,
  useGetDimensionControllerExecuteSuspense,
} from '~/shared/api';
import { Article } from '~/shared/ui/Article';
import { Section } from '~/shared/ui/Section';
import { SectionGroup } from '~/shared/ui/SectionGroup';

import { Posts } from '~/widgets/posts';
import { Specialists } from '~/widgets/specialists';

type Props = {
  alias: DimensionAlias;
};

export function Dimension({ alias }: Props) {
  const { headings, href, items } =
    useGetDimensionControllerExecuteSuspense(alias);

  return (
    <>
      <div>
        <Section headings={headings}>
          {items.map((item) => (
            <Link key={item.alias} href={`${href}/${item.alias}`}>
              <Article title={item.headings.primary}>
                {item.content && parse(DOMPurify.sanitize(item.content))}
              </Article>
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
