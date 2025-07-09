import { Dialog } from '@/components/Dialog';
import { DialogProps } from '@/components/Dialog/Dialog';
import { DEFAULT_SIGNUP_PATH } from '@/constants/routes';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

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
      title={t('common.buttons.logout')}
      maxWidth="sm"
      sx={{ marginX: 'auto', width: '600' }}
      dialogButtons={[
        {
          id: 'cancel',
          type: 'button',
          children: t('common.buttons.cancel'),
          variant: 'outlined',
          disableElevation: true,
          color: 'inherit',
          onClick: onClose,
        },
        {
          id: 'submit',
          type: 'submit',
          children: t('pages.account.logoutConfirm'),
          variant: 'contained',
          color: 'primary',
          onClick: handleClickOnSignOut,
        },
      ]}
    >
      <Typography variant="h6">{t('pages.account.logoutMsg')}</Typography>
    </Dialog>
  );
};

export default LogoutDialog;
