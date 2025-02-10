'use client';

import { Projects } from '@/data';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { Socials } from '@/components/common';
import { Card, Flex, List, Stack, Title, Text, Anchor, Badge } from '@mantine/core';

export default function ProjectsPage() {
  const { isDesktop } = useMediaQueries();
  const length = Projects.length;

  return (
    <AppPage title='Projects'>
      <Card>
        <Flex direction='column' gap='xs' px='xs'>
          <Title order={3}>Explore More</Title>
          <Text fz={15} fw={600}>
            If you'd like to learn more about any of these projects or discuss potential
            collaborations, feel free to reach out! I'm always open to new ideas and exciting
            opportunities.
          </Text>
        </Flex>

        <Flex direction='column' gap={4} px='xs' mt='md'>
          <Title order={4}>Contact Me</Title>
          <Socials />
        </Flex>
      </Card>

      <Stack>
        {Projects.map((project, idx) => {
          return (
            <Card key={project.id} withBorder bg='transparent'>
              <Flex direction='column' gap='xs'>
                <Title order={3} lh={1.2}>
                  {length - idx}. {project.label}
                </Title>

                <Text fz={15} fw={600}>
                  {project.desc}
                </Text>

                {project.tags && (
                  <Flex direction='row' align='center' gap={isDesktop ? 'xs' : 6} wrap='wrap'>
                    {project.tags.map((tag) => (
                      <Badge
                        key={project.id + '-' + tag.replaceAll(' ', '-')}
                        style={{ textTransform: 'capitalize' }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                )}

                <List size={'sm'} withPadding={isDesktop}>
                  {project.links.map((link, idx) => {
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
