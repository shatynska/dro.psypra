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
        <Section variant={'light'} headings={headings}>
          {items.map((item) => (
            <Article key={item.title}>
              <h2>{item.title}</h2>
              <div>{item.content}</div>
            </Article>
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
