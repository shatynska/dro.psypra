import { Members } from '~/pages/members';

import { TemporaryHeroSection } from './TemporaryHeroSection';

export function TemporaryHome() {
  return (
    <>
      <TemporaryHeroSection />
      <div className="pt-16 [&_h2]:pb-4 [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:font-bold ">
        <Members />
      </div>
    </>
  );
}
