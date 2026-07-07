import { Inter, Fira_Code } from 'next/font/google';
import { AppHead } from '@/components/shell';
import AppProvider from '@/components/app-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <AppHead />
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
