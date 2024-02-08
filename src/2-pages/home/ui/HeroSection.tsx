import Image from 'next/image';

import { Logotype } from '~/shared/ui/Logotype';

import HeroInfo from './HeroInfo';

export function HeroSection() {
  return (
    <>
      <div className="absolute -top-16 h-[684px] w-full bg-gradient-to-b from-red-gradient-dark to-red-gradient-light bg-[length:100%_720px] bg-top bg-no-repeat pt-16 sm:h-[752px] lg:h-[832px] lg:bg-gradient-to-t lg:pt-16" />
      <div className="absolute h-[620px] w-full bg-[url('/images/hero-purple-fon.svg')] bg-[left_-9.5rem_top_-2rem] bg-no-repeat sm:bg-[left_-2rem_top_-6rem] lg:h-[840px] lg:bg-[center_top_2rem]" />
      <div className="absolute top-[428px] h-64 w-full bg-gradient-to-t from-red-gradient-dark to-red-gradient-light sm:top-[560px] lg:hidden" />

      <section className="z-50 flex h-[684px] flex-col gap-y-36 text-background sm:h-[816px] lg:h-[736px] lg:flex-row lg:content-between lg:justify-center lg:pt-36">
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
            <Logotype className="absolute left-[148px] top-12 text-sm sm:left-56 sm:top-16 sm:text-lg lg:text-2xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-end">
              <div className="relative h-[172px] w-[258px] sm:h-[258px] sm:w-[388px] lg:w-[358px]">
                <Image
                  src={'/images/dro.svg'}
                  alt="ДРО"
                  fill={true}
                  className="object-left-bottom lg:object-none"
                />
              </div>
              <div>
                <div className="relative text-5xl font-extrabold sm:text-7xl">
                  гобиччини
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroInfo />
      </section>
    </>
  );
}
