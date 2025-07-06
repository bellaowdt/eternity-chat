import { GREY_F9_COLOR } from '@/constants/general';

export const greyOutlinedInputBackgroundSx = (color?: string) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: color ?? GREY_F9_COLOR,
  },
});

export const greyOutlinedSelectBackgroundSx = (color?: string) => ({
  '& .MuiSelect-root': {
    backgroundColor: color ?? '#ff0',
  },
});
