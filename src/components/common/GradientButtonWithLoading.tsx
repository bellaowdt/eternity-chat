import { ButtonProps, CircularProgress } from '@mui/material';
import { FC } from 'react';
import GradientButton from './GradientButton';
import { FIXED_BUTTON_HEIGHT } from '@/constants/general';

export interface GradientButtonWithLoadingProps extends ButtonProps {
  isLoading?: boolean;
}
const GradientButtonWithLoading: FC<GradientButtonWithLoadingProps> = ({
  isLoading,
  ...props
}) => {
  return (
    <GradientButton
      {...props}
      disabled={isLoading || props.disabled}
      sx={{ minWidth: 100, height: FIXED_BUTTON_HEIGHT, ...props.sx }}
    >
      {isLoading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        props.children
      )}
    </GradientButton>
  );
};

export default GradientButtonWithLoading;
