import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function Specialists() {
  const { headings, href, items } =
    useGetSpecialistsControllerExecuteSuspense();

  return <Section headings={headings}></Section>;
}
