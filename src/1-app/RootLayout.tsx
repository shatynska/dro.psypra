import { Manrope } from 'next/font/google';

import { cn } from '~/shared/lib';

import { Header } from '~/widgets/header';
import { Sidebar } from '~/widgets/sidebar';

import './globals.css';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={cn(
          manrope.className,
          'relative bg-background leading-relaxed text-foreground',
        )}
      >
        <div className="mx-auto flex max-w-384 flex-col">
          <Header />
          <main className="relative flex flex-col lg:pt-16">{children}</main>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
