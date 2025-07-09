import { useTheme, useMediaQuery } from '@mui/material';

const useResponsiveScale = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isXLarge = useMediaQuery(theme.breakpoints.up('xl'));

  let scale = 0.75;

  if (isMobile) scale = 0.5;
  else if (isTablet) scale = 0.6;
  // else if (isXLarge) scale = 1;
  else if (isLarge) scale = 0.8;

  return scale;
};

export default useResponsiveScale;
