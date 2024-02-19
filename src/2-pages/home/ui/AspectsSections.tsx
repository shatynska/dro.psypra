import { SectionGroup } from '~/shared/ui/SectionGroup';

import { ApproachesSection } from './ApproachesSection';
import { FormsSection } from './FormsSection';
import { QuestionsSection } from './QuestionsSection';
import { SpecialistsSection } from './SpecialistsSection';
import { SpecialtiesSection } from './SpecialtiesSection';
import { TermsSection } from './TermsSection';
import { ThemesSection } from './ThemesSection';

export function AspectsSections() {
  return (
    <>
      <div>
        <QuestionsSection />
      </div>
      <SectionGroup>
        <SpecialtiesSection />
        <SpecialistsSection />
      </SectionGroup>
      <SectionGroup variant="red">
        <FormsSection />
        <ThemesSection />
      </SectionGroup>
      <SectionGroup>
        <TermsSection />
        <ApproachesSection />
      </SectionGroup>
    </>
  );
}
