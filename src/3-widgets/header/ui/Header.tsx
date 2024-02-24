import Link from 'next/link';

import { Logo } from '~/shared/ui/Logo';

import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header
      role="banner"
      className="absolute left-0 top-0 z-10 flex h-32 w-full bg-gradient-to-b from-blue-gradient-dark to-blue-gradient-light bg-[length:100%_6rem] pt-4 text-background lg:bg-[url('/images/header-fon.svg')] lg:bg-[length:auto]"
    >
      <div className="flex h-14 items-center justify-between">
        <Link href="/">
          <Logo variant="header" />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}
