import { SectionGroup } from '~/shared/ui/Section';

import {
  ApproachesSection,
  ContactsSection,
  CostsSection,
  FormsSection,
  HeroSection,
  LocationsSection,
  QuestionsSection,
  SpecialistsSection,
  SpecialtiesSection,
  TermsSection,
  ThemesSection,
  TimesSection,
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
        <TimesSection />
        <ContactsSection />
      </SectionGroup>
    </>
  );
}
