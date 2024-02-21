import Image from 'next/image';

import pigeons from '/public/images/pigeons.svg';

import { HeadLine } from '~/shared/ui/HeadLine';
import { Logomark } from '~/shared/ui/Logomark';
import { Logotype } from '~/shared/ui/Logotype';

export function TemporaryHeroSection() {
  return (
    <>
      <div className="absolute h-[41.25rem] w-full bg-gradient-to-b from-red-gradient-dark to-red-gradient-light sm:h-[44rem] lg:bg-gradient-to-t" />
      <div className="absolute h-[26rem] w-full bg-[url('/images/hero-purple-fon.svg')] bg-[left_-10rem_top_-3rem] bg-no-repeat sm:h-128 sm:bg-[left_-2rem_top_-6rem] lg:top-16 lg:h-[46rem] lg:bg-[center_top]" />
      <div className="absolute top-[25.25rem] h-64 w-full bg-gradient-to-t from-red-gradient-dark to-red-gradient-light sm:top-128 lg:hidden" />

      <section className="relative text-background lg:h-[44rem]">
        <div className="lg:pt-18 grid grid-cols-[1fr_9.5rem_4.75rem_1rem_1fr] grid-rows-[6rem_7.75rem_2.75rem_2.75rem_5rem_16rem] content-center justify-center pt-4 sm:grid-cols-[1fr_14.25rem_7.25rem_1.75rem_1fr] sm:grid-rows-[6rem_11.75rem_4.25rem_4rem_5rem_16rem] lg:h-screen lg:max-h-192 lg:min-h-160 lg:grid-cols-[0_14.25rem_7.25rem__minmax(8rem,24rem)_16rem] lg:grid-rows-[8rem_11.75rem_4.25rem]">
          <div className="absolute left-0 h-28 w-28 lg:relative lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:h-32 lg:w-48">
            <Image
              src={pigeons}
              alt="птахи"
              fill={true}
              className="object-none object-right-top"
            />
          </div>

          <Logotype className="col-span-2 col-start-3 row-start-2 self-end pb-5 text-xs sm:pb-6 sm:text-lg lg:text-xl lg:font-semibold" />

          <div className="relative col-span-4 col-start-2 row-span-2 row-start-2 flex h-[10.5rem] w-[14.25rem] items-end sm:h-64 sm:w-[21.5rem] sm:text-7xl">
            <Logomark variant="hero" />
          </div>

          <div className="relative col-start-4 row-start-3 h-2 w-3 self-center justify-self-end bg-background sm:h-3 sm:w-5 sm:justify-self-center lg:hidden" />

          <div className="col-span-3 col-start-2 row-start-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:col-start-4 lg:row-start-3 lg:pt-0.5">
            гобиччини
          </div>

          <div className="col-span-full col-start-1 row-start-6 w-64 place-self-center text-center lg:col-span-1 lg:col-start-5 lg:row-start-1 lg:hidden">
            <HeadLine className="mb-6" />
          </div>
        </div>
      </section>
    </>
  );
}
