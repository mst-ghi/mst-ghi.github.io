import React from 'react';
import Link from 'next/link';
import { ActionIcon, Flex } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTelegram } from '@tabler/icons-react';

const Socials = () => {
  return (
    <Flex direction='row' align='center' gap='md' mt='lg' wrap='wrap'>
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
        href={'https://t.me/@mostafa_ghi'}
      >
        <IconBrandTelegram size={26} stroke={1.5} />
      </ActionIcon>
    </Flex>
  );
};

export default Socials;
