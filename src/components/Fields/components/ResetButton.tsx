import { Button, ButtonProps } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const ResetButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { reset } = useFormContext();

  const confirm = useConfirm();

  const onClick = () => {
    confirm().then(() => {
      reset({});
      props?.onClick?.(null);
    });
  };

  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ResetButton;
