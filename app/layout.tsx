import type { Metadata } from 'next';

import { RootLayout } from '~/app/RootLayout';

export const metadata: Metadata = {
  title: 'Психологи, психотерапевти та психіатри Дрогобиччини',
  description: 'Професійна допомога в сфері психічного здоров&#39;я',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
