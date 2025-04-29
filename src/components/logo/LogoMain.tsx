// material-ui

import { Box, useTheme } from '@mui/material';
import { Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * const logoDark =  '/assets/images/logo-dark.svg';
 * const logo =  '/assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const sources: Record<typeof mode, string> = {
    light: '/assets/images/logo-colored-black.svg',
    dark: '/assets/images/logo-colored-white.svg',
  };

  return (
    <Box
      sx={{
        pt: 5,
        pb: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          height: 56,
          borderRadius: '50%',
        }}
        src={sources[mode]}
        alt="Logo"
      />
      <Typography variant="h5">Motomatch</Typography>
    </Box>
  );
};

export default LogoMain;
