'use client';

import Link from 'next/link';
import { AppPage } from '@/components/shell';
import { usePathname } from 'next/navigation';
import { Button, Center, Flex, Text } from '@mantine/core';

export default function NotFoundPage() {
  const pathname = usePathname();
  return (
    <AppPage>
      <Center
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(90vh - 60px)',
          gap: 26,
        }}
      >
        <Text fw={500} size='xl'>
          Sorry, Page Not Found
        </Text>

        <Text fw={500} td='line-through' mt={-16} c='gray'>
          {pathname}
        </Text>

        <Flex direction='row' align='center' justify='center' gap='xl'>
          <Button variant='outline' component={Link} href='/'>
            Go To Home Page
          </Button>
        </Flex>
      </Center>
    </AppPage>
  );
}
