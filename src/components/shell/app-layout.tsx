'use client';

import { AppShell } from '@mantine/core';
import AppNavigate from './app-navigate';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      pos='relative'
      styles={{
        main: {
          padding: 16,
          height: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        footer: { padding: 16 },
      }}
    >
      {Array.from({ length: 8 }).map((e, idx) => (
        <div key={`firefly-${idx}`} className='firefly' />
      ))}

      <AppShell.Main>{children}</AppShell.Main>

      <AppNavigate />
    </AppShell>
  );
};

export default AppLayout;
