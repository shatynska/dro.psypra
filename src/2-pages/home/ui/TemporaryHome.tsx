import { Members } from '~/pages/members';

import { TemporaryHeroSection } from './TemporaryHeroSection';

export function TemporaryHome() {
  return (
    <>
      <div className="lg:-mt-16">
        <TemporaryHeroSection />
        <Members />
      </div>
    </>
  );
}
