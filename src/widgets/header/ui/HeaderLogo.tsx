import Link from 'next/link';

import { Logomark } from '~/shared/ui/Logomark';
import { Logotype } from '~/shared/ui/Logotype';

export function HeaderLogo() {
  return (
    <Link href="/" className="flex h-16 w-40 flex-row items-center">
      <Logomark />
      <Logotype className="ml-2 text-xs" />
    </Link>
  );
}
