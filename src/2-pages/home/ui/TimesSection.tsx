import { useGetTimesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function TimesSection() {
  const { headings, href, items } = useGetTimesControllerExecuteSuspense();

  return <Section id="times" variant="dark" headings={headings}></Section>;
}
