import type { Metadata } from 'next';

import { Providers } from '@/app/providers';
import { AppLayout } from '@/common/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'MapTiler Entity Catalog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
