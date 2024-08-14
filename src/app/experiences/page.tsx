'use client';

import { AppPage } from '@/components/shell';
import { Experiences } from '@/data';
import { Card, Flex, List, Stack, Text, Title } from '@mantine/core';

export default function ExperiencesPage() {
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

                <List size='sm' mt={6} withPadding>
                  {exp.features.map((feature, idx) => {
                    return <List.Item key={`feature-${idx}`}>{feature}</List.Item>;
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
