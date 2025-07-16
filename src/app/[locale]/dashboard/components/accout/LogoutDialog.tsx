import { Dialog } from '@/components/Dialog';
import { DialogProps } from '@/components/Dialog/Dialog';
import { DEFAULT_MAX_WIDTH_469 } from '@/constants/general';
import { DEFAULT_SIGNUP_PATH } from '@/constants/routes';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import ModalInformation from '../ModalInformation';

export type LogoutDialogProps = DialogProps;

const LogoutDialog: FC<LogoutDialogProps> = ({ ...props }) => {
  const t = useTranslations();
  const router = useRouter();
  const onClose = () => props.onClose?.({}, 'backdropClick');

  //   const { mutateAsync, isPending } = useMutation({
  //     mutationFn: auth.logout,
  //   });

  const handleClickOnSignOut = async () => {
    //   await mutateAsync();
    router.push(DEFAULT_SIGNUP_PATH);
  };

  return (
    <Dialog
      {...props}
      title=""
      sx={{ marginX: 'auto', maxWidth: DEFAULT_MAX_WIDTH_469 }}
      dialogActionSx={{ width: '80%' }}
      dialogContentProps={{ sx: { p: 0 } }}
      dialogButtons={[
        {
          id: 'cancel',
          type: 'button',
          children: t('common.buttons.cancel'),
          variant: 'contained',
          disableElevation: true,
          color: 'primary',
          fullWidth: true,
          onClick: onClose,
        },
        {
          id: 'submit',
          type: 'submit',
          children: t('pages.account.logoutConfirm'),
          variant: 'text',
          fullWidth: true,
          color: 'inherit',
          onClick: handleClickOnSignOut,
        },
      ]}
    >
      <ModalInformation
        title={t('common.buttons.logout')}
        icon="leave-door.png"
      >
        <Typography variant="h6">{t('pages.account.logoutMsg')}</Typography>
      </ModalInformation>
    </Dialog>
  );
};

export default LogoutDialog;
