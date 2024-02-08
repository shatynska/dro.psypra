import { HeroSection } from './HeroSection';
import { QuestionsSection } from './QuestionsSection';
import { SpecialtiesSection } from './SpecialtiesSection';

export function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <QuestionsSection />
      </div>
    </main>
  );
}
