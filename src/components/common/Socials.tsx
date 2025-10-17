import React from 'react';
import Link from 'next/link';
import { ActionIcon, Button, Flex } from '@mantine/core';
import { IconBrandBlogger, IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconHome } from '@tabler/icons-react';

const Socials = () => {
	return (
		<Flex direction='row' align='center' gap='md' mt='lg' wrap='wrap'>
			<ActionIcon
				size='xl'
				variant='outline'
				component={Link}
				href={'/'}
			>
				<IconHome size={26} stroke={1.5} />
			</ActionIcon>

			<ActionIcon
				size='xl'
				variant='outline'
				component={Link}
				href={'/posts'}
			>
				<IconBrandBlogger size={26} stroke={1.5} />
			</ActionIcon>

			<ActionIcon
				size='xl'
				variant='outline'
				component={Link}
				target='_blank'
				href={'https://github.com/mst-ghi'}
			>
				<IconBrandGithub size={26} stroke={1.5} />
			</ActionIcon>

			<ActionIcon
				size='xl'
				variant='outline'
				component={Link}
				target='_blank'
				href={'https://www.linkedin.com/in/mst-ghi/'}
			>
				<IconBrandLinkedin size={26} stroke={1.5} />
			</ActionIcon>

			<ActionIcon
				size='xl'
				variant='outline'
				component={Link}
				target='_blank'
				href={'https://t.me/mostafa_ghi'}
			>
				<IconBrandTelegram size={26} stroke={1.5} />
			</ActionIcon>



		</Flex>
	);
};

export default Socials;
