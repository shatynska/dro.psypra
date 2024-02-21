import { useGetCostsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function CostsSection() {
  const { headings, href, items } = useGetCostsControllerExecuteSuspense();

  return <Section id="costs" variant="dark" headings={headings}></Section>;
}
