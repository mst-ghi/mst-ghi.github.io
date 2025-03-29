import { Fira_Code } from 'next/font/google';
import { AppHead } from '@/components/shell';
import AppProvider from '@/components/app-provider';

const Fira = Fira_Code({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <AppHead />
      <body suppressHydrationWarning className={Fira.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
