'use client';

import { AppShell, Center, Loader } from '@mantine/core';
import AppNavigate from './app-navigate';
import { useEffect, useState } from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

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
      {Array.from({ length: 12 }).map((e, idx) => (
        <div key={`firefly-${idx}`} className='firefly' />
      ))}

      {loading && (
        <Center h='100dvh' pos='absolute' left={0} top={0} right={0} bottom={0}>
          <Loader />
        </Center>
      )}

      {!loading && <AppShell.Main>{children}</AppShell.Main>}

      <AppNavigate />
    </AppShell>
  );
};

export default AppLayout;
