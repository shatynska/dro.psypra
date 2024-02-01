import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import { cn } from '~/shared/lib';

import { Header } from '~/widgets/header';

import './globals.css';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Психологи, психотерапевти та психіатри Дрогобиччини',
  description: 'Професійна допомога в сфері психічного здоров&#39;я',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('mx-auto flex max-w-360 flex-col', manrope.className)}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
