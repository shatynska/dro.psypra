import { HeaderLogo } from './HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
}
