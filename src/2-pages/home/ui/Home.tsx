import { SectionGroup } from '~/shared/ui/SectionGroup';

import { ApproachesSection } from './ApproachesSection';
import { ContactsSection } from './ContactsSection';
import { CostsSection } from './CostsSection';
import { FormsSection } from './FormsSection';
import { HeroSection } from './HeroSection';
import { LocationsSection } from './LocationsSection';
import { QuestionsSection } from './QuestionsSection';
import { SpecialistsSection } from './SpecialistsSection';
import { SpecialtiesSection } from './SpecialtiesSection';
import { TermsSection } from './TermsSection';
import { ThemesSection } from './ThemesSection';
import { TimesSection } from './TimesSection';

export function Home() {
  return (
    <>
      <HeroSection />
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
      <SectionGroup variant="red">
        <CostsSection />
        <LocationsSection />
      </SectionGroup>
      <SectionGroup>
        <TimesSection />
        <ContactsSection />
      </SectionGroup>
    </>
  );
}
