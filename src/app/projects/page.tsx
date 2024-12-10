'use client';

import { Projects } from '@/data';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { Card, Flex, List, Stack, Title, Text, Anchor } from '@mantine/core';

export default function ProjectsPage() {
  const { isDesktop } = useMediaQueries();

  return (
    <AppPage title='Projects'>
      <Stack>
        {Projects.map((exp) => {
          return (
            <Card key={exp.id} withBorder bg='transparent'>
              <Flex direction='column' gap='xs'>
                <Title order={3} lh={1.2}>
                  {exp.label}
                </Title>
                <Text fz={15} fw={600}>
                  {exp.desc}
                </Text>

                <List size={'sm'} withPadding={isDesktop}>
                  {exp.links.map((link, idx) => {
                    return (
                      <List.Item key={`link-${idx}`}>
                        <Anchor href={link} target='_blank' size={isDesktop ? 'md' : 'sm'}>
                          {link}
                        </Anchor>
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
