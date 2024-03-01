import { useGetTimesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function TimesSection() {
  const { headings, items } = useGetTimesControllerExecuteSuspense();

  return <Section id="times" headings={headings} background="dark"></Section>;
}
