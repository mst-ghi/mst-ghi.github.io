'use client';

import { AppPage } from '@/components/shell';
import { AppData } from '@/data';
import { Box } from '@mantine/core';

export default function AboutPage() {
  return (
    <AppPage title='About Me'>
      <Box dangerouslySetInnerHTML={{ __html: AppData.bio }} />
    </AppPage>
  );
}
