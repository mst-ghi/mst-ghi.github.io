'use client';

import '@mantine/core/styles.css';
import '../styles/globals.css';

import { Suspense } from 'react';
import { AppLayout } from './shell';
import { ThemeObject } from '@/utils/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <ColorSchemeScript forceColorScheme='dark' />
      <MantineProvider forceColorScheme='dark' theme={ThemeObject}>
        <AppLayout>{children}</AppLayout>
      </MantineProvider>
    </Suspense>
  );
};

export default AppProvider;
