import { Category, CategoryAlias, categories } from '~/shared/api/mock';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';
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
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="line-clamp-10 text-justify md:hyphens-none md:text-left lg:line-clamp-7">
                {item.content}
              </CardContent>
            </Card>
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
