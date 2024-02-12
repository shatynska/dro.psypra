import { specialistsSectionHeadings as headings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function SpecialistsSection() {
  return <Section variant={'light'} headings={headings}></Section>;
}
