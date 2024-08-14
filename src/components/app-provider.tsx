'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import '../styles/globals.css';

import { Suspense } from 'react';
import { AppLayout } from './shell';
import { ThemeObject } from '@/utils/theme';
import { ModalsProvider } from '@mantine/modals';
import { DatesProvider } from '@mantine/dates';
import { Notifications } from '@mantine/notifications';
import { ColorSchemeScript, MantineProvider, ScrollArea } from '@mantine/core';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <ColorSchemeScript forceColorScheme='dark' />
      <MantineProvider forceColorScheme='dark' theme={ThemeObject}>
        <DatesProvider
          settings={{
            locale: 'fa',
            timezone: 'Asia/Tehran',
          }}
        >
          <Notifications limit={7} autoClose={5000} containerWidth='100%' position='top-center' />
          <ModalsProvider
            labels={{ confirm: 'Yes', cancel: 'No' }}
            modalProps={{
              centered: true,
              scrollAreaComponent: ScrollArea.Autosize,
              overlayProps: {
                opacity: 0.55,
                blur: 3,
              },
            }}
          >
            <AppLayout>{children}</AppLayout>
          </ModalsProvider>
        </DatesProvider>
      </MantineProvider>
    </Suspense>
  );
};

export default AppProvider;
