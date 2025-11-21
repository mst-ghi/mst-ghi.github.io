'use client';

import { Socials } from '../common';
import { AppShell, Center } from '@mantine/core';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      pos='relative'
      styles={{
        main: {
          padding: 16,
          height: '100dvh',
          width: '100dvw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer withBorder={false}>
        <Center mb='md'>
          <Socials />
        </Center>
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
