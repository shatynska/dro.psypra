import { specialistsHeadings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function Specialists() {
  return <Section headings={specialistsHeadings}></Section>;
}
