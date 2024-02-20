import { useGetPostsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function Posts() {
  const { headings, items } = useGetPostsControllerExecuteSuspense();

  return <Section variant="dark" height="fixed" headings={headings}></Section>;
}
