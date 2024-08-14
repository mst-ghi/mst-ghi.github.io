import { Lato } from 'next/font/google';
import { AppHead } from '@/components/shell';
import AppProvider from '@/components/app-provider';

const lato = Lato({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={lato.className}>
      <AppHead />
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
