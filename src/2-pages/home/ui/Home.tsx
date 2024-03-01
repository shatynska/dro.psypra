import { SectionGroup } from '~/shared/ui/Section';

import {
  ApproachesSection,
  ContactsSection,
  CostsSection,
  FormsSection,
  HeroSection,
  LocationsSection,
  QuestionsSection,
  SchedulesSection,
  SpecialistsSection,
  SpecialtiesSection,
  TermsSection,
  ThemesSection,
} from './sections';

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
      <SectionGroup>
        <FormsSection />
        <ThemesSection />
      </SectionGroup>
      <SectionGroup>
        <TermsSection />
        <ApproachesSection />
      </SectionGroup>
      <SectionGroup>
        <CostsSection />
        <LocationsSection />
      </SectionGroup>
      <SectionGroup>
        <SchedulesSection />
        <ContactsSection />
      </SectionGroup>
    </>
  );
}
