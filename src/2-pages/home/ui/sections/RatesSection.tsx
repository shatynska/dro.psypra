import { useGetRatesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function RatesSection() {
  const { headings, items } = useGetRatesControllerExecuteSuspense();

  return <Section id="rates" headings={headings} background="dark"></Section>;
}
