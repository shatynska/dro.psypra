import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

import { SpecialistCardList } from '~/entities/specialist';

export function Specialists() {
  const { headings, href, items } =
    useGetSpecialistsControllerExecuteSuspense();

  return (
    <Section headings={headings} href={href}>
      <SpecialistCardList items={items} />
    </Section>
  );
}
