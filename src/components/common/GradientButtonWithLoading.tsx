import { ButtonProps, CircularProgress } from '@mui/material';
import { FC } from 'react';
import GradientButton from './GradientButton';

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
      sx={{ minWidth: 100, ...props.sx }}
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
