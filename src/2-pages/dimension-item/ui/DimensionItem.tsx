import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import {
  DimensionAlias,
  useGetDimensionItemControllerExecuteSuspense,
} from '~/shared/api';
import { Article } from '~/shared/ui/Article';
import { Section, SectionGroup } from '~/shared/ui/Section';

import { Posts } from '~/widgets/posts';
import { Specialists } from '~/widgets/specialists';

type Props = {
  dimensionAlias: DimensionAlias;
  itemAlias: string;
};

export function DimensionItem({ dimensionAlias, itemAlias }: Props) {
  const { alias, headings, parentLink, content } =
    useGetDimensionItemControllerExecuteSuspense(dimensionAlias, itemAlias);
  return (
    <>
      <div>
        <Section headings={headings} parentLink={parentLink} type="main">
          <Article>{content && parse(DOMPurify.sanitize(content))}</Article>
        </Section>
      </div>
      <SectionGroup>
        <Posts />
        <Specialists />
      </SectionGroup>
    </>
  );
}
