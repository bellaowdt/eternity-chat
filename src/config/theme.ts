'use client';

import { GlobalStylesProps, ThemeOptions, createTheme } from '@mui/material';
import Link from 'next/link';

export const globalStyles: GlobalStylesProps['styles'] = () => ({
  a: {
    textDecoration: 'none !important',
  },
});

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#9e30e3',
      dark: '#771be8',
      light: '#cd40ee',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#de3860',
      dark: '#db3560',
      light: '#ed5b87',
      contrastText: '#FFF',
    },
    background: {
      default: '#FFF',
      paper: '#f6f6f6',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21,
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    overline: {
      lineHeight: 1.66,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
    MuiBottomNavigationAction: {
      defaultProps: {
        component: Link,
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
             font-family: 'iransans';
              src: url('/assets/fonts/iransansWeb/woff/IRANSansWeb.woff') format('truetype');
             }`,
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: { height: "2.5rem", }
    //   }
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: { height: "2.5rem", }
    //   }
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1366,
      xl: 1536,
    },
  },
};

export const defaultTheme = createTheme({
  ...themeOptions,
});

export const persianTheme = createTheme({
  ...themeOptions,
  direction: 'rtl',
  typography: {
    fontFamily: "'iransans'," + defaultTheme.typography.fontFamily,
    ...themeOptions.typography,
  },
});
