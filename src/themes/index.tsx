import { ReactNode, useMemo } from 'react';

// material-ui
import { CssBaseline, GlobalStyles, StyledEngineProvider } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  TypographyVariantsOptions,
} from '@mui/material/styles';

import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';

// types
import { CustomShadowProps } from '@/types/theme';
import { Direction } from '@mui/system';
import { useSelector } from '@/store';
import { grey } from '@mui/material/colors';
import { LanguagesType } from '@/configs/languages';

// types
type ThemeCustomizationProps = {
  children: ReactNode;
};

export const languageMapper: Record<
  LanguagesType,
  { direction: Direction; fontFamily: string }
> = {
  'en-US': {
    direction: 'ltr',
    fontFamily: 'manrope, noto-Arabic',
  },
  'ar-OM': {
    direction: 'rtl',
    fontFamily: 'noto-Arabic, manrope',
  },
  'fa-IR': {
    direction: 'rtl',
    fontFamily: 'yekan-bakh, manrope',
  },
};

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const { mode, presetColor, i18n } = useSelector((state) => state.config);

  const theme: Theme = useMemo<Theme>(
    () => Palette(mode, presetColor),
    [mode, presetColor],
  );

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(() => {
      const fontFamily = languageMapper[i18n].fontFamily;
      return Typography(mode, fontFamily, theme);
    }, [mode, i18n]);

  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => CustomShadows(theme),
    [theme],
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: languageMapper[i18n].direction,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows],
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '*::-webkit-scrollbar-track': {
              backgroundColor: grey[200],
            },
            '*::-webkit-scrollbar': {
              width: 8,
              backgroundColor: '#F5F5F5',
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: grey[500],
            },
          }}
        />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
