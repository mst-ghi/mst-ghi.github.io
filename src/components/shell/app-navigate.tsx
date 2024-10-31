'use client';

import Link from 'next/link';
import { useMediaQueries } from '@/hooks';
import { usePathname } from 'next/navigation';
import { ActionIcon, Flex, Menu, Text } from '@mantine/core';
import { IconChevronUp, IconMenu2 } from '@tabler/icons-react';

interface NavigateLink {
  href: string;
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
  const pathname = usePathname();
  const { isMobile } = useMediaQueries();

  if (isMobile) {
    return (
      <Menu withinPortal width={136} position='left-end'>
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
  }

  return (
    <Flex
      pos='fixed'
      bottom={0}
      left={0}
      w='100vw'
      align='center'
      justify='center'
      gap='xl'
      mb={24}
      mt={24}
    >
      {Links.map((ln, idx) => {
        let isActive = pathname.includes(ln.href);

        if (ln.href === '/') {
          isActive = pathname === ln.href;
        }

        let label = ln.label;
        if (ln.href.startsWith('/resume')) {
          label = 'Download-Resume';
        }

        return (
          <Link
            key={`menu-${ln.href}-${idx}`}
            href={ln.href || '#'}
            target={ln.newTab ? '_blank' : undefined}
            style={{ textDecoration: 'none', position: 'relative' }}
          >
            <Text fw={700}>{label}</Text>
            {isActive && (
              <IconChevronUp
                size={18}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: -12,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            )}
          </Link>
        );
      })}
    </Flex>
  );
};

export default AppNavigate;
