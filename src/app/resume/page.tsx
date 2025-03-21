'use client';

import Link from 'next/link';
import { AppPage } from '@/components/shell';
import { Flex, List, Text } from '@mantine/core';

export default function ResumePage() {
  return (
    <AppPage title='Resume Files'>
      <Text fz={18}>
        If you're looking for a skilled developer in frontend, backend, or full-stack development,
        check out my resumes below. <br />I have experience in all these areas and am passionate
        about working on challenging projects. Feel free to download the resume that best fits your
        needs.
      </Text>

      <Text mt='md' fw={600} fz={20}>
        Download My Resumes:
      </Text>

      <List size='lg'>
        <List.Item>
          <Flex direction='row' align='center' justify='space-between' gap='xs' miw={320}>
            <Text>Fullstack Developer</Text>
            <Link href='/resume/MostafaGholami-FullStackResume.pdf' target='_blank'>
              <Text fw={700} tt='uppercase' td='underline'>
                Download
              </Text>
            </Link>
          </Flex>
        </List.Item>

        <List.Item>
          <Flex direction='row' align='center' justify='space-between' gap='xs' miw={320}>
            <Text>Backend Developer</Text>
            <Link href='/resume/MostafaGholami-BackendResume.pdf' target='_blank'>
              <Text fw={700} tt='uppercase' td='underline'>
                Download
              </Text>
            </Link>
          </Flex>
        </List.Item>

        <List.Item>
          <Flex direction='row' align='center' justify='space-between' gap='xs' miw={320}>
            <Text>Frontend Developer</Text>
            <Link href='/resume/MostafaGholami-FrontendResume.pdf' target='_blank'>
              <Text fw={700} tt='uppercase' td='underline'>
                Download
              </Text>
            </Link>
          </Flex>
        </List.Item>
      </List>
    </AppPage>
  );
}
