import Link from 'next/link';
import { useMediaQueries } from '@/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { ActionIcon, Menu, Text } from '@mantine/core';

interface NavigateLink {
  href?: string;
  label: string;
  newTab?: boolean;
}

const Links: NavigateLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '/resume/MostafaGholami-Resume.pdf', newTab: true },
];

const AppNavigate = () => {
  const { isMobile } = useMediaQueries();

  return (
    <Menu withinPortal width={120} position='left-end'>
      <Menu.Target>
        <ActionIcon
          pos='absolute'
          bottom={isMobile ? 12 : 36}
          right={isMobile ? 12 : 36}
          size={48}
          variant='outline'
          color='white'
          radius='xl'
        >
          <IconMenu2 />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown color='dark'>
        {Links.map((ln, idx) => {
          return (
            <Menu.Item
              key={`menu-${ln.href}-${idx}`}
              component={Link}
              href={ln.href || '#'}
              target={ln.newTab ? '_blank' : undefined}
            >
              <Text fw={500}> {ln.label}</Text>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default AppNavigate;
