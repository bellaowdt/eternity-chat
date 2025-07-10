import { Close } from '@mui/icons-material';
import { DialogActions, Divider, IconButton, Typography } from '@mui/material';
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
  showDialogTitle?: boolean;
}

const Dialog: FC<DialogProps> = ({
  title,
  showDialogTitle = true,
  dialogButtons,
  ...props
}) => {
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
      {showDialogTitle && (
        <>
          <DialogTitle
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h4" fontWeight="700">
              {title}
            </Typography>
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
        </>
      )}
      <DialogContent {...props.dialogContentProps}>
        {props.children}
      </DialogContent>
      {dialogButtons && dialogButtons?.length > 0 && (
        <DialogActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {dialogButtons?.map((button, index) => {
            return <ButtonWithLoading key={index} {...button} />;
          })}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
