'use client';

import { OpenSources } from '@/data';
import { useMediaQueries } from '@/hooks';
import { AppPage } from '@/components/shell';
import { Card, Flex, List, Stack, Title, Text, Anchor, Badge } from '@mantine/core';

export default function OpenSourcesPage() {
  const { isDesktop } = useMediaQueries();
  const length = OpenSources.length;

  return (
    <AppPage title='Open Sources'>
      <Stack>
        {OpenSources.map((source, idx) => {
          return (
            <Card key={source.id} withBorder bg='transparent'>
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
          );
        })}
      </Stack>
    </AppPage>
  );
}
