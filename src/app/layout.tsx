import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { SALE, AW } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL(SALE),
  title: 'Awshad Diwali Sale',
  description: 'Limited time offers on premium cannabis wellness products.',
  icons: {
    icon: 'https://awshad.com/wp-content/uploads/2019/06/Awshad_LogoMark_Black.png',
    apple: 'https://awshad.com/wp-content/uploads/2019/06/Awshad_LogoMark_Black.png',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://awshad.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//awshad.com" />
        <link rel="prefetch" href="https://awshad.com/checkout/" as="document" />
        <Script id="connection-warmer" strategy="lazyOnload">
          {`
            window.addEventListener('load', () => {
              fetch('https://awshad.com/', { mode: 'no-cors', keepalive: true }).catch(()=>{});
            });
          `}
        </Script>
        <Script id="checkout-prefetcher" strategy="lazyOnload">
          {`
            document.addEventListener('pointerover', e => {
              const a = e.target.closest('a[href*="aw_cart_bridge=1"][href*="go=checkout"]');
              if (!a || a.dataset.prefetched) return;
              a.dataset.prefetched = "1";
              fetch('https://awshad.com/', { mode:'no-cors' }).catch(()=>{});
            }, { passive:true });
          `}
        </Script>
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
