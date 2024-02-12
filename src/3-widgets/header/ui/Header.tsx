import Link from 'next/link';

import { Logo } from '~/shared/ui/Logo';

import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className="absolute left-0 top-0 z-10 hidden h-32 w-full bg-[url('/images/header-fon.svg')] pt-4 text-background lg:flex">
      <div className="flex h-14 items-center justify-between">
        <Link href="/">
          <Logo variant="header" />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}
