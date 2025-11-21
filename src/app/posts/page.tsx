'use client';

import Link from 'next/link';
import { AppPosts } from '@/data';
import { AppPage } from '@/components/shell';
import { Button, Card, Flex, ScrollArea, Text } from '@mantine/core';

export default function PostsPage() {
	return (
		<AppPage>
			<ScrollArea
				pb={68}
				styles={{
					root: {
						height: 'calc(100vh - 24px)',
					},
					content: {
						display: 'flex',
						flexDirection: 'column',
						gap: '24px',
					},
				}}
			>
				{AppPosts.map((post, idx) => {
					return (
						<Card key={idx + post.id}>
							<Flex gap='xs' direction={'column'}>
								<Text fw={700}>{post.title}</Text>
								<Text fw={400} size='sm'>
									{post.content}
								</Text>
							</Flex>

							<Flex direction={'row'} justify={'flex-end'} mt='md' w='100%'>
								<Button component={Link} target='_blank' w={148} href={post.link}>
									See Detail
								</Button>
							</Flex>
						</Card>
					);
				})}
			</ScrollArea>
		</AppPage>
	);
}
