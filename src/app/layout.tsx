import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

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
      <body className={manrope.className}>
        <div className="m-auto flex max-w-screen-lg flex-col justify-center">
          <main>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
