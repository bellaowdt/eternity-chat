'use client';

import { useTheme, useMediaQuery } from '@mui/material';

type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const useResponsiveContainer = (requiredSize?: MaxWidth) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));

  const calculatedSize: MaxWidth = matchesLg ? 'md' : matchesMd ? 'sm' : 'xs';

  return requiredSize ?? calculatedSize;
};

export default useResponsiveContainer;
