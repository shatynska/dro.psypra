import { SectionGroup } from '~/shared/ui/Section';

import {
  ApproachesSection,
  ContactsSection,
  RatesSection,
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
        <RatesSection />
        <LocationsSection />
      </SectionGroup>
      <SectionGroup>
        <SchedulesSection />
        <ContactsSection />
      </SectionGroup>
    </>
  );
}
