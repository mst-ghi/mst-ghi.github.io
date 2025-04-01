'use client';

import { useMediaQueries } from '@/hooks';
import { Container, Flex } from '@mantine/core';

interface AppPageProps {
  children: React.ReactNode;
}

const AppPage = ({ children }: AppPageProps) => {
  const { isMobile } = useMediaQueries();

  return (
    <Container w='100%' pos='relative' fluid={isMobile} px={isMobile ? 0 : undefined}>
      <Flex direction='column' gap='md'>
        {children}
      </Flex>
    </Container>
  );
};

export default AppPage;
