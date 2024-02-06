import { HeaderLogo } from './HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className="z-10 hidden min-h-32 bg-[url('/images/header-fon.svg')] pt-4 text-background md:flex">
      <div className="flex h-16 items-center justify-between">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
}
