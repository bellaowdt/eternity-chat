import { Close } from '@mui/icons-material';
import { Box, DialogActions, Divider, IconButton } from '@mui/material';
import MuiDialog, {
  type DialogProps as MuiDialogProps,
} from '@mui/material/Dialog';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FC } from 'react';
import {
  ButtonWithLoading,
  type ButtonWithLoadingProps,
} from '../ButtonWithLoading';
import { DialogTransition } from '../DialogTransition';

export interface DialogProps extends MuiDialogProps {
  dialogContentProps?: DialogContentProps;
  dialogButtons?: ButtonWithLoadingProps[];
}

const Dialog: FC<DialogProps> = ({ title, ...props }) => {
  return (
    <MuiDialog
      sx={{
        borderRadius: 0.7,
        ...props?.sx,
      }}
      slots={{
        transition: DialogTransition,
      }}
      {...props}
      slotProps={{
        ...props?.slotProps,
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: '600',
        }}
      >
        {title}
        <IconButton
          aria-label="close-dialog"
          onClick={() => {
            props.onClose?.({}, 'escapeKeyDown');
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent {...props.dialogContentProps}>
        <Box mt={1}>{props.children}</Box>
      </DialogContent>
      {props?.dialogButtons && props?.dialogButtons?.length > 0 && (
        <DialogActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props?.dialogButtons?.map((button, index) => {
            return <ButtonWithLoading key={index} {...button} />;
          })}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
