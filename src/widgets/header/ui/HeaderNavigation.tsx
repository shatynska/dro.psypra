import Link from 'next/link';

export function HeaderNavigation() {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-16">
        <li>
          <Link href={'/specialits'}>фахівці</Link>
        </li>
        <li>
          <Link href={'/about-us'}>про нас</Link>
        </li>
        <li>
          <Link href={'/information'}>інформація</Link>
        </li>
      </ul>
    </nav>
  );
}
