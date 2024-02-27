import Image from 'next/image';
import Link from 'next/link';

import pigeons from '/public/images/pigeons.svg';

import { HeadLine } from '~/shared/ui/HeadLine';
import { Logotype } from '~/shared/ui/Logotype';

export function HeroSection() {
  return (
    <div className="z-30 -mt-[5.5rem] md:-mt-28 lg:z-auto">
      <div className="absolute h-160 w-full bg-gradient-to-b from-blue-gradient-dark from-[6rem] to-blue-gradient-light to-[24rem] bg-[center_top] md:h-[50rem] md:bg-[url('/images/hero-fon.svg')]" />

      <section className="relative flex h-160 flex-col items-center gap-20 text-background md:h-[44rem] md:gap-16">
        <div className="mt-48 grid grid-rows-[5.25rem,3rem] md:mt-40 md:grid-cols-[10rem,18rem,auto] md:grid-rows-[12rem,4rem]">
          <div className="absolute left-0 top-4 h-20 w-40 md:relative md:col-span-2 md:col-start-3 md:row-start-1">
            <Image src={pigeons} alt="птахи" fill={true} />
          </div>
          <Logotype className="col-start-2 row-start-1 self-end text-end text-xl font-light md:mb-7 md:ml-7 md:text-start md:text-[1.75rem] md:leading-9 md:tracking-normal" />
          <div className="col-span-2 col-start-1 row-span-2 row-start-1 self-end text-end text-[1.875rem] font-bold uppercase leading-none tracking-tight first-letter:bg-[url('/images/logomark-md.svg')] first-letter:bg-[bottom_left] first-letter:bg-no-repeat first-letter:pl-[6.5rem] first-letter:pr-[0.125rem] first-letter:pt-[7.5rem] first-letter:text-[0rem] md:text-start md:text-[4rem] md:first-letter:bg-[url('/images/logomark-lg.svg')] md:first-letter:pl-[10rem] md:first-letter:pt-[12rem]">
            Дрогобиччини
          </div>
        </div>

        <div className="w-64 text-center">
          <HeadLine className="mb-6" />
          <Link
            href="/specialists"
            className="rounded-md bg-background px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            знайти фахівця
          </Link>
        </div>
      </section>
    </div>
  );
}
