import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function Specialists() {
  const { headings, parentLink, items } =
    useGetSpecialistsControllerExecuteSuspense();

  return (
    <div>
      <Section
        headings={headings}
        parentLink={parentLink}
        type="main"
      ></Section>
    </div>
  );
}
