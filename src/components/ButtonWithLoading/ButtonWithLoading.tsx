import { FIXED_BUTTON_HEIGHT } from '@/constants/general';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { FC } from 'react';

export interface ButtonWithLoadingProps extends ButtonProps {
  isLoading?: boolean;
}
const ButtonWithLoading: FC<ButtonWithLoadingProps> = ({
  isLoading,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={isLoading || props.disabled}
      sx={{ minWidth: 100, height: FIXED_BUTTON_HEIGHT, ...props.sx }}
    >
      {isLoading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default ButtonWithLoading;
