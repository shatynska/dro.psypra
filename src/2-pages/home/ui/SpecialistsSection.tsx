import { specialistsHeadings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function SpecialistsSection() {
  return <Section height="fixed" headings={specialistsHeadings}></Section>;
}
