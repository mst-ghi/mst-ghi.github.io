'use client';

import { AppPage } from '@/components/shell';
import { Projects } from '@/data';
import { Card, Flex, List, Stack, Title, Text, Anchor } from '@mantine/core';

export default function ProjectsPage() {
  return (
    <AppPage title='Projects'>
      <Stack>
        {Projects.map((exp) => {
          return (
            <Card key={exp.id} withBorder bg='transparent'>
              <Flex direction='column'>
                <Title order={3}>{exp.label}</Title>
                <Text fz={15} fw={600}>
                  {exp.desc}
                </Text>

                <List size='sm' mt={6} withPadding>
                  {exp.links.map((link, idx) => {
                    return (
                      <List.Item key={`link-${idx}`}>
                        <Anchor href={link} target='_blank'>
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
