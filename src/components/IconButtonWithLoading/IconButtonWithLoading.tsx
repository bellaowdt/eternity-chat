import { CircularProgress, IconButton, IconButtonProps } from '@mui/material';
import { FC } from 'react';

export interface IconButtonWithLoadingProps extends IconButtonProps {
  isLoading?: boolean;
  outlined?: boolean;
}
const IconButtonWithLoading: FC<IconButtonWithLoadingProps> = ({
  isLoading,
  outlined,
  ...props
}) => {
  return (
    <IconButton
      {...props}
      disabled={isLoading || props.disabled}
      sx={
        outlined
          ? {
              borderColor: 'inherit',
              border: '1px solid',
            }
          : null
      }
    >
      {isLoading ? (
        <CircularProgress color="inherit" size={16} />
      ) : (
        props.children
      )}
    </IconButton>
  );
};

export default IconButtonWithLoading;
