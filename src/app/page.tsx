'use client';

import { AppData } from '@/data';
import { Text } from '@mantine/core';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  const { isMobile } = useMediaQueries();

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
        style={{ fontSize: '1em', display: 'inline-block', minHeight: 100 }}
      />
    </AppPage>
  );
}
