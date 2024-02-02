import { HeaderLogo } from './HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className="min-h-32 bg-[url('/images/header-fon.svg')] pt-4 text-background">
      <div className="flex h-16 items-center justify-between">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
}
