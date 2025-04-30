// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * const logoIconDark = '/assets/images/logo-icon-dark.svg';
 * const logoIcon = '/assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const sources: Record<typeof mode, string> = {
    light: '/assets/images/logo-colored-black.svg',
    dark: '/assets/images/logo-colored-white.svg',
  };

  return (
    <>
      <img
        style={{
          height: 38,
          borderRadius: '50%',
        }}
        src={sources[mode]}
        alt="Logo"
      />
    </>
  );
};

export default LogoIcon;
