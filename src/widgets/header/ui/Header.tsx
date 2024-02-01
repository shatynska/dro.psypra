import { HeaderLogo } from './HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className="min-h-32 bg-[url('/images/header-fon.svg')] text-background">
      <div className="flex justify-between">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
}
