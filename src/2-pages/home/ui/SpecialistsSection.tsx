import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function SpecialistsSection() {
  const { headings, href, items } =
    useGetSpecialistsControllerExecuteSuspense();

  return <Section headings={headings} href={href} height="fixed"></Section>;
}
