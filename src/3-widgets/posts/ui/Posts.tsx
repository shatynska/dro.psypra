import { postsHeadings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function Posts() {
  return <Section variant="dark" headings={postsHeadings}></Section>;
}
