import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function SpecialistsSection() {
  const { headings, href, items } =
    useGetSpecialistsControllerExecuteSuspense();

  return <Section height="fixed" headings={headings} href={href}></Section>;
}
