'use client';

import Link from 'next/link';
import { AppPage } from '@/components/shell';
import { Button, Card, Flex, Text } from '@mantine/core';

export default function PostsPage() {
	return (
		<AppPage>
			<Card>
				<Flex gap='xs' direction={'column'}>
					<Text fw={700}>Post #2: Introducing Zen Browser – The Fast, Privacy-Focused Browser</Text>
					<Text fw={400} size='sm'>
						Zen is a high-performance web browser built for the modern user, delivering unparalleled
						privacy, efficiency, and a distraction-free experience. Designed to keep you focused and
						secure.
					</Text>
				</Flex>

				<Flex direction={'row'} justify={'flex-end'} mt='md' w='100%'>
					<Button
						component={Link}
						target='_blank'
						w={148}
						href={
							'https://www.linkedin.com/posts/mst-ghi_zenbrowser-webbrowser-privacy-activity-7385008317712113664-3j3a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2u7RwBNc5l3a0aKufwLqf7_HpDXvF3-Oo'
						}
					>
						See Detail
					</Button>
				</Flex>
			</Card>

			<Card>
				<Flex gap='xs' direction={'column'}>
					<Text fw={700}>Post #1: Introducing Zed IDE – The Fast, Lightweight Code Editor</Text>
					<Text fw={400} size='sm'>
						Zed is a high-performance code editor built in Rust, delivering exceptional speed and
						efficiency for developers. Currently available for Linux and macOS, with Windows support
						coming soon.
					</Text>
				</Flex>

				<Flex direction={'row'} justify={'flex-end'} mt='md' w='100%'>
					<Button
						component={Link}
						target='_blank'
						w={148}
						href={
							'https://www.linkedin.com/posts/mst-ghi_zedide-developertools-programming-activity-7363485779848757250-QYUG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2u7RwBNc5l3a0aKufwLqf7_HpDXvF3-Oo'
						}
					>
						See Detail
					</Button>
				</Flex>
			</Card>
		</AppPage>
	);
}
