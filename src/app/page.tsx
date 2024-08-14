'use client';

import { AppData } from '@/data';
import { Title, Text } from '@mantine/core';
import { AppPage } from '@/components/shell';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <AppPage>
      <Text fz={24} fw={700}>
        Hi
      </Text>
      <Title>I'm {AppData.name}</Title>
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
        ]}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1em', display: 'inline-block', minHeight: 100 }}
      />
    </AppPage>
  );
}
