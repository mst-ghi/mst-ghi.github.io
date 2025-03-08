'use client';

import { OpenSources } from '@/data';
import Tilt from 'react-parallax-tilt';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { Card, Flex, List, Stack, Title, Text, Anchor, Badge } from '@mantine/core';
import Link from 'next/link';

export default function OpenSourcesPage() {
  const { isDesktop } = useMediaQueries();
  const length = OpenSources.length;

  return (
    <AppPage title='Open Sources'>
      <Card>
        <Flex direction='column' gap='xs' px='xs'>
          <Text fz={15} fw={600}>
            Here, you'll find a collection of projects that I've developed and shared with the
            developer community. Open source is my way of giving back to the community, fostering
            collaboration, and driving innovation. From utility libraries to full-fledged
            applications, each project reflects my passion for clean code, scalable solutions, and
            impactful ideas.
          </Text>
          <Link href='https://github.com/mst-ghi' target='_blank'>
            My Github Page
          </Link>
        </Flex>
      </Card>

      <Stack>
        {OpenSources.map((source, idx) => {
          return (
            <Tilt key={source.id} tiltMaxAngleX={0} tiltMaxAngleY={14}>
              <Card withBorder bg='transparent'>
                <Flex direction='column' gap='xs'>
                  <Title order={3} lh={1.2}>
                    {length - idx}.{source.label}
                  </Title>

                  <Text fz={15} fw={600}>
                    {source.desc}
                  </Text>

                  {source.tags && (
                    <Flex direction='row' align='center' gap={isDesktop ? 'xs' : 6} wrap='wrap'>
                      {source.tags.map((tag) => (
                        <Badge
                          key={source.id + '-' + tag.replaceAll(' ', '-')}
                          style={{ textTransform: 'capitalize' }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Flex>
                  )}

                  <List size={'sm'} withPadding={isDesktop}>
                    {source.links.map((link, idx) => {
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
            </Tilt>
          );
        })}
      </Stack>
    </AppPage>
  );
}
