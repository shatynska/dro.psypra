import {
  specialtiesSectionHeadings as headings,
  specialtiesSectionPosts as posts,
} from '~/shared/api/mock';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';
import { Section } from '~/shared/ui/Section';

export function SpecialtiesSection() {
  const top = new Map([
    [0, 'mt-20'],
    [1, 'mt-10'],
    [2, 'mt-0'],
  ]);

  return (
    <Section variant={'dark'} headings={headings}>
      <div className="flex flex-col gap-24 lg:flex-row">
        {posts.map((post, index) => {
          return (
            <Card key={post.title} className={top.get(index)}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="line-clamp-10">
                {post.content}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
