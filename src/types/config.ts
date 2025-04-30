import { LanguagesType } from 'src/configs/languages';

export type ThemeMode = 'light' | 'dark';
export type FontFamily = string;
export type PresetColor =
  | 'default'
  | 'theme1'
  | 'theme2'
  | 'theme3'
  | 'theme4'
  | 'theme5'
  | 'theme6'
  | 'theme7'
  | 'theme8';

export type DefaultConfigProps = {
  i18n: LanguagesType;
  miniDrawer: boolean;
  container: boolean;
  mode: ThemeMode;
  presetColor: PresetColor;
};
