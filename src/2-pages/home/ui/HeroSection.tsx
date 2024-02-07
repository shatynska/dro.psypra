import Image from 'next/image';

import { Logotype } from '~/shared/ui/Logotype';

import HeroInfo from './HeroInfo';

export function HeroSection() {
  return (
    <div className="relative -top-16 h-[736px] w-full bg-gradient-to-b from-red-gradient-dark to-red-gradient-light bg-[length:100%_720px] bg-top bg-no-repeat pt-16 lg:h-[832px] lg:bg-gradient-to-t lg:pt-16">
      <div className="absolute h-[720px] w-full bg-[url('/images/hero-purple-fon.svg')] bg-[left_-9.5rem_top_-2rem] bg-no-repeat sm:bg-[left_-2rem_top_-6rem] lg:h-[840px] lg:bg-[center_top_2rem]" />
      <div className="absolute top-[560px] h-60 w-full bg-gradient-to-t from-blue-gradient-dark to-blue-gradient-light lg:hidden" />

      <section className="flex flex-col gap-y-36 text-background sm:gap-y-24 lg:flex-row lg:content-between lg:justify-center lg:pt-36">
        <div className="relative flex w-full flex-col items-center lg:w-auto">
          <div className="relative ml-2 mt-6 h-28 w-28 self-start lg:ml-72 lg:mt-0 lg:h-40 lg:w-52 lg:scale-100">
            <Image
              src={'/images/pigeons.svg'}
              alt="hero"
              fill={true}
              className="object-none object-right-top"
            />
          </div>
          <div className="relative">
            <Logotype className="absolute left-48 top-16 sm:left-56 sm:text-lg lg:text-2xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-end">
              <div className="relative h-[216px] w-[323px] sm:h-[258px] sm:w-[388px] lg:w-[358px]">
                <Image
                  src={'/images/dro.svg'}
                  alt="ДРО"
                  fill={true}
                  className="object-left-bottom lg:object-none"
                />
              </div>
              <div>
                <div className="relative text-6xl font-extrabold sm:text-7xl">
                  гобиччини
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroInfo />
      </section>
    </div>
  );
}
