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
      <div className='bg-gradient-to-b from-blue-gradient-dark to-blue-gradient-light bg-[length:100%_34rem] lg:bg-[url("/images/blue-fon.svg")] lg:bg-[length:auto]'>
        <SpecialtiesSection />
        <SpecialistsSection />
      </div>
    </>
  );
}
