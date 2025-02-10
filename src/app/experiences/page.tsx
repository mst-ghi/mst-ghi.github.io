'use client';

import { Experiences } from '@/data';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { Card, Flex, List, Stack, Text, Title } from '@mantine/core';

export default function ExperiencesPage() {
  const { isDesktop } = useMediaQueries();

  return (
    <AppPage title='Experiences'>
      <Stack>
        {Experiences.map((exp) => {
          return (
            <Card key={exp.id} withBorder bg='transparent'>
              <Flex direction='column'>
                <Title order={3}>{exp.label}</Title>
                <Text fz={15} fw={600}>
                  {exp.company}
                </Text>
                <Text fz={13}>{exp.date}</Text>
                <Text fz={13}>{exp.workType}</Text>

                <List mt='xs' size='xs' withPadding={isDesktop}>
                  {exp.features.map((feature, idx) => {
                    return (
                      <List.Item key={`feature-${idx}`}>
                        <Text size={isDesktop ? 'md' : 'sm'}>{feature}</Text>
                      </List.Item>
                    );
                  })}
                </List>
              </Flex>
            </Card>
          );
        })}
      </Stack>
    </AppPage>
  );
}
