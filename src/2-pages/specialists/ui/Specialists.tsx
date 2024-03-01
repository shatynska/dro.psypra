import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

import { SpecialistCardList } from '~/entities/specialist';

export function Specialists() {
  const { headings, parentLink, items } =
    useGetSpecialistsControllerExecuteSuspense();

  return (
    <div>
      <Section headings={headings} parentLink={parentLink} type="main">
        <SpecialistCardList items={items} direction="up" />
      </Section>
    </div>
  );
}
