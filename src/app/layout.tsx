import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import { Header } from '~/widgets/header';
import { Sidebar } from '~/widgets/sidebar';

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
      <body className={manrope.className}>
        <div className="mx-auto flex max-w-360 flex-col">
          <Header />
          {children}
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
