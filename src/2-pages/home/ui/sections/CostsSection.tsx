import { useGetCostsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function CostsSection() {
  const { headings, items } = useGetCostsControllerExecuteSuspense();

  return <Section id="costs" headings={headings} background="dark"></Section>;
}
