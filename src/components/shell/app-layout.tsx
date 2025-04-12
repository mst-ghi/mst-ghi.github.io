'use client';

import { Socials } from '../common';
import { useEffect, useState } from 'react';
import { AppShell, Center, Loader } from '@mantine/core';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
      }}
    >
      {Array.from({ length: 16 }).map((e, idx) => (
        <div key={`firefly-${idx}`} className='firefly' />
      ))}

      {loading && (
        <Center h='100dvh' pos='absolute' left={0} top={0} right={0} bottom={0}>
          <Loader color='white' />
        </Center>
      )}

      {!loading && <AppShell.Main>{children}</AppShell.Main>}
      {!loading && (
        <AppShell.Footer withBorder={false}>
          <Center mb='md'>
            <Socials />
          </Center>
        </AppShell.Footer>
      )}
    </AppShell>
  );
};

export default AppLayout;
