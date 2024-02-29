import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

import {
  DimensionAlias,
  useGetDimensionControllerExecuteSuspense,
} from '~/shared/api';
import { Article } from '~/shared/ui/Article';
import { Section, SectionGroup } from '~/shared/ui/Section';

import { Posts } from '~/widgets/posts';
import { Specialists } from '~/widgets/specialists';

type Props = {
  alias: DimensionAlias;
};

export function Dimension({ alias }: Props) {
  const { headings, href, parentLink, items } =
    useGetDimensionControllerExecuteSuspense(alias);

  return (
    <>
      <div>
        <Section headings={headings} parentLink={parentLink} type="main">
          {items &&
            items.map((item) => (
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
