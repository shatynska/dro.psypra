import { Category, CategoryAlias, categories } from '~/shared/api/mock';
import { Article } from '~/shared/ui/Article';
import { Section } from '~/shared/ui/Section';
import { SectionGroup } from '~/shared/ui/SectionGroup';

import { Posts } from '~/widgets/posts';
import { Specialists } from '~/widgets/specialists';

type Props = {
  alias: CategoryAlias;
};

export function Category({ alias }: Props) {
  //TODO Fix types
  const { headings, items } = categories.get(alias) as Category;

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
