import { HeroSection } from './HeroSection';
import { QuestionsSection } from './QuestionsSection';
import { SpecialistsSection } from './SpecialistsSection';
import { SpecialtiesSection } from './SpecialtiesSection';

export function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <QuestionsSection />
      </div>
      <div className='bg-[url("/images/blue-fon.svg")]'>
        <SpecialtiesSection />
        <SpecialistsSection />
      </div>
    </>
  );
}
