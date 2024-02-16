import { SectionGroup } from '~/shared/ui/SectionGroup';

import { ApproachesSection } from './ApproachesSection';
import { FormsSection } from './FormsSection';
import { HeroSection } from './HeroSection';
import { QuestionsSection } from './QuestionsSection';
import { SpecialistsSection } from './SpecialistsSection';
import { SpecialtiesSection } from './SpecialtiesSection';
import { TermsSection } from './TermsSection';
import { ThemesSection } from './ThemesSection';

export function Home() {
  return (
    <>
      <div className="lg:-mt-16">
        <HeroSection />
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
