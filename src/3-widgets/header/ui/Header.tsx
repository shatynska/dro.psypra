'use client';

import Link from 'next/link';

import { cn } from '~/shared/lib';
import { Logo } from '~/shared/ui/Logo';

import { useIsScrollingDown } from '../lib';

import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  const isScrollingDown = useIsScrollingDown();

  return (
    <header
      role="banner"
      className={cn(
        'relative left-0 top-0 z-10 flex h-22 w-full bg-gradient-to-b from-blue-gradient-dark to-blue-gradient-light bg-[length:100%_6rem] pt-4 text-background md:h-28 md:bg-[url("/images/header-fon.svg")] md:bg-[length:auto] lg:sticky lg:transition-all lg:duration-500 lg:ease-in-out',
        isScrollingDown === true ? 'md:-top-28' : 'md:top-0',
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Logo variant="header" />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}
