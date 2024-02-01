import Link from 'next/link';

import { Logomark } from '~/shared/ui/Logomark';
import { Logotype } from '~/shared/ui/Logotype';

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xs">
      <Logomark />
      <Logotype />
    </Link>
  );
}
