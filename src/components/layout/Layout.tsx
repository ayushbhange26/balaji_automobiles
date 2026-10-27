import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileActionBar } from './MobileActionBar';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppFloat } from './WhatsAppFloat';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col bg-ink text-ivory">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </div>
  );
}
