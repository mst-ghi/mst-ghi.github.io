import { useMediaQuery } from '@mantine/hooks';

const useMediaQueries = () => {
  const isMobile = useMediaQuery('(max-width: 48em)');

  return {
    isMobile,
    isDesktop: !isMobile,
  };
};

export default useMediaQueries;
