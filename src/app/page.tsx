'use client';

import Link from 'next/link';
import { AppData } from '@/data';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { IconDownload } from '@tabler/icons-react';
import { TypeAnimation } from 'react-type-animation';
import { Anchor, Box, Button, Flex, Text } from '@mantine/core';

export default function HomePage() {
  const { isMobile, isDesktop } = useMediaQueries();

  return (
    <AppPage>
      <Text fz={24} fw={700} mb='-sm'>
        Hi
      </Text>
      <Text fz={isMobile ? 26 : 32} fw={800}>
        I'm {AppData.name}
      </Text>
      <Text fz={20} fw={700} mt='-md'>
        {AppData.headline}
      </Text>
      <TypeAnimation
        sequence={[
          AppData.headlineStacks[0],
          1500,
          AppData.headlineStacks[1],
          1500,
          AppData.headlineStacks[2],
          1500,
          AppData.headlineStacks[3],
          1500,
          AppData.headlineStacks[4],
          1500,
        ]}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1em', display: 'inline-block', minHeight: 52 }}
      />

      <Flex direction='row' align='center' gap={4}>
        <Text size='sm' fw={400}>
          Email:
        </Text>
        <Anchor
          href={`mail::${AppData.email}`}
          aria-label={AppData.email}
          size={isDesktop ? 'lg' : 'sm'}
        >
          {AppData.email}
        </Anchor>
      </Flex>

      <Flex direction='row' align='center' gap={4} mt='-xs'>
        <Text size='sm' fw={400}>
          Mobile:
        </Text>
        <Anchor
          href={`tel::${AppData.phone}`}
          aria-label={AppData.phone}
          size={isDesktop ? 'lg' : 'sm'}
        >
          {AppData.phone}
        </Anchor>
      </Flex>

      <Box mt='md'>
        <Button
          component={Link}
          variant='outline'
          color='#f9f9f9'
          target='_blank'
          href='/MostafaGholami-Resume.pdf'
          leftSection={<IconDownload size={20} />}
        >
          Download My Resume
        </Button>
      </Box>
    </AppPage>
  );
}
