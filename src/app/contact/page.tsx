'use client';

import Link from 'next/link';
import { AppData } from '@/data';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { Socials } from '@/components/common';
import { Anchor, Flex, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export default function ContactPage() {
  const { isDesktop } = useMediaQueries();

  return (
    <AppPage title="Let's Collaborate">
      <Text fz={18}>
        Interested in working together? Whether it's a full-time, part-time, project-based, or
        hourly collaboration, feel free to reach out. Simply fill out the form below or use the
        contact details provided. Looking forward to discussing how I can assist with your project.
      </Text>

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
          href={`tel::${AppData.phone.replaceAll(' ', '')}`}
          aria-label={AppData.phone}
          size={isDesktop ? 'lg' : 'sm'}
        >
          {AppData.phone.replaceAll(' ', '')}
        </Anchor>
      </Flex>

      <Link href={'https://github.com/mst-ghi'} target='_blank'>
        <Flex direction='row' gap='xs' mt='lg'>
          <IconAlertCircle />
          <Text fw={700} tt='uppercase' td='underline'>
            Visit my GitHub and check out my repositories.
          </Text>
        </Flex>
      </Link>

      <Text mt='md' fw={600} fz={24}>
        Stay Connected:
      </Text>

      <Socials />
    </AppPage>
  );
}
