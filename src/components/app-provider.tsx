'use client';

import '@mantine/core/styles.css';
import '../styles/globals.css';

import { Suspense } from 'react';
import { AppLayout } from './shell';
import { ThemeObject } from '@/utils/theme';
import { ModalsProvider } from '@mantine/modals';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <ColorSchemeScript forceColorScheme='dark' />
      <MantineProvider forceColorScheme='dark' theme={ThemeObject}>
        <ModalsProvider labels={{ confirm: 'Yes', cancel: 'No' }}>
          <AppLayout>{children}</AppLayout>
        </ModalsProvider>
      </MantineProvider>
    </Suspense>
  );
};

export default AppProvider;
