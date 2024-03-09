import { useGetPostsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  dimension?: string;
  dimensionItem?: string;
  specialist?: string;
};

export function Posts({ dimension, dimensionItem, specialist }: Props) {
  const { headings, items } = useGetPostsControllerExecuteSuspense({
    dimension,
    dimensionItem,
    specialist,
  });

  return (
    <Section headings={headings} background="dark" height="fixed"></Section>
  );
}
