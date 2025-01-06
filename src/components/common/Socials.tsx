import React from 'react';
import Link from 'next/link';
import { Button, Flex } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
} from '@tabler/icons-react';

const Socials = () => {
  return (
    <Flex direction='row' align='center' gap='sm' wrap='wrap'>
      <Button
        leftSection={<IconBrandGithub />}
        variant='subtle'
        component={Link}
        href={'https://github.com/mst-ghi'}
        target='_blank'
      >
        Github
      </Button>

      <Button
        leftSection={<IconBrandLinkedin />}
        variant='subtle'
        component={Link}
        href={'https://www.linkedin.com/in/mst-ghi/'}
        target='_blank'
      >
        Linkedin
      </Button>

      <Button
        leftSection={<IconBrandTelegram />}
        variant='subtle'
        component={Link}
        href={'https://t.me/@mostafa_ghi'}
        target='_blank'
      >
        Telegram
      </Button>

      <Button
        leftSection={<IconBrandTwitter />}
        variant='subtle'
        component={Link}
        href={'https://x.com/mst_ghi'}
        target='_blank'
      >
        Twitter
      </Button>
    </Flex>
  );
};

export default Socials;
