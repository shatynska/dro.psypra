import Link from 'next/link';

import { Logo } from '~/shared/ui/Logo';

import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header
      role="banner"
      className="relative left-0 top-0 z-10 flex h-[5.5rem] w-full bg-gradient-to-b from-blue-gradient-dark to-blue-gradient-light bg-[length:100%_6rem] pt-4 text-background md:sticky lg:h-28 lg:bg-[url('/images/header-fon.svg')] lg:bg-[length:auto]"
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
