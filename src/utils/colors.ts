import { lighten } from '@mui/system';
import colornames from 'colornames';

export const isValidHexColor = (str: string): boolean => {
  const hexColorPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  return hexColorPattern.test(str);
};

export const getTagColorHex = (name: string) => {
  const _name =
    name.toLowerCase() === 'warning' ? 'orange' : name.toLowerCase();

  return lighten(colornames(_name), 0.8);
};
