import { FIXED_BUTTON_HEIGHT } from '@/constants/general';
import {
  Button,
  ButtonProps,
  CircularProgress,
  SxProps,
  Theme,
} from '@mui/material';
import { FC } from 'react';

export interface ButtonWithLoadingProps extends ButtonProps {
  isLoading?: boolean;
}

export const fancyButtonStyle: SxProps<Theme> = {
  position: 'relative',
  overflow: 'hidden',
  minWidth: 100,
  height: FIXED_BUTTON_HEIGHT,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  transition: 'all 0.2s ease-in-out',
  borderRadius: '50px',
  '::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'secondary.light',
    zIndex: -1,
    transform: 'translateY(100%)',
    transition: 'transform 0.2s ease-in-out',
    borderRadius: 'inherit',
  },
  '&:hover::before': {
    transform: 'translateY(0)',
  },
  '&:hover': {
    color: 'common.black',
  },
};

const ButtonWithLoading: FC<ButtonWithLoadingProps> = ({
  isLoading,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={isLoading || props.disabled}
      sx={{ ...fancyButtonStyle, ...props.sx }}
    >
      {isLoading ? <CircularProgress color="inherit" size={20} /> : children}
    </Button>
  );
};

export default ButtonWithLoading;
