import { SectionGroup } from '~/shared/ui/SectionGroup';

import { HeroSection } from './HeroSection';
import { QuestionsSection } from './QuestionsSection';
import { SpecialistsSection } from './SpecialistsSection';
import { SpecialtiesSection } from './SpecialtiesSection';

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
    </>
  );
}
