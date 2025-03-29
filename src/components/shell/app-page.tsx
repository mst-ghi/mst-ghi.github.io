'use client';

import { motion } from 'framer-motion';
import { useMediaQueries } from '@/hooks';
import { Container, Flex, ScrollArea, Title } from '@mantine/core';

interface AppPageProps {
  title?: string;
  children: React.ReactNode;
}

const AppPage = ({ title, children }: AppPageProps) => {
  const { isMobile } = useMediaQueries();

  return (
    <ScrollArea mb='md' mah={isMobile ? '100dvh' : 'calc(100dvh - 100px)'}>
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.2 }}
      >
        <Container pos='relative' fluid={isMobile} px={isMobile ? 0 : undefined}>
          {title && <Title mb='md'>{title}</Title>}
          <Flex direction='column' gap='md' h='100%'>
            {children}
          </Flex>
        </Container>
      </motion.main>
    </ScrollArea>
  );
};

export default AppPage;
