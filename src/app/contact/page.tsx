'use client';

import { AppData } from '@/data';
import { AppPage } from '@/components/shell';
import { Anchor, Button, Flex, List, Text } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <AppPage title="Let's Collaborate">
      <Text fz={18}>
        Interested in working together? Whether it's a full-time, part-time, project-based, or
        hourly collaboration, feel free to reach out. Simply fill out the form below or use the
        contact details provided. Looking forward to discussing how I can assist with your project.
      </Text>

      <List withPadding size='lg'>
        <List.Item>
          Email:{' '}
          <Anchor href={`mail::${AppData.email}`} aria-label={AppData.email}>
            {AppData.email}
          </Anchor>
        </List.Item>

        <List.Item>
          Mobile:{' '}
          <Anchor href={`tel::${AppData.phone.replaceAll(' ', '')}`} aria-label={AppData.phone}>
            {AppData.phone}
          </Anchor>
        </List.Item>
      </List>

      <Text mt='xl' fw={600} fz={24}>
        Stay Connected:
      </Text>

      <Flex direction='row' align='center' gap='sm' wrap='wrap'>
        <Button
          leftSection={<IconBrandGithub />}
          variant='subtle'
          component={Link}
          href={'https://github.com/mst-ghi'}
          target='_blank'
        >
          Github
        </Button>

        <Button
          leftSection={<IconBrandLinkedin />}
          variant='subtle'
          component={Link}
          href={'https://www.linkedin.com/in/mst-ghi/'}
          target='_blank'
        >
          Linkedin
        </Button>

        <Button
          leftSection={<IconBrandTelegram />}
          variant='subtle'
          component={Link}
          href={'https://t.me/@mostafa_ghi'}
          target='_blank'
        >
          Telegram
        </Button>

        <Button
          leftSection={<IconBrandTwitter />}
          variant='subtle'
          component={Link}
          href={'https://x.com/mst_ghi'}
          target='_blank'
        >
          Twitter
        </Button>
      </Flex>
    </AppPage>
  );
}
