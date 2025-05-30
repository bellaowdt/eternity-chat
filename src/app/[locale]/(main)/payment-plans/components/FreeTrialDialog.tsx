import { Dialog } from '@/components/Dialog';
import { DialogProps } from '@/components/Dialog/Dialog';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

export type FreeTrialDialogProps = DialogProps;

const FreeTrialDialog: FC<FreeTrialDialogProps> = ({ ...props }) => {
  const t = useTranslations();
  return (
    <Dialog
      {...props}
      title={t('pages.paymentPlans.freeTrial.welcome')}
      maxWidth="sm"
      fullWidth
      sx={{ marginX: 'auto', ...props?.sx }}
      dialogButtons={[]}
    >
      <Stack spacing={3} alignItems="center" px={2} textAlign="center">
        <TaskAltIcon sx={{ fontSize: 160 }} />
        <Typography variant="h3">
          {t('pages.paymentPlans.freeTrial.welcome')}
        </Typography>
        <Typography variant="body1">
          {t('pages.paymentPlans.freeTrial.description')}
        </Typography>
        <Button fullWidth variant="contained" size="large">
          {t('pages.paymentPlans.freeTrial.beginButton')}
        </Button>
      </Stack>
    </Dialog>
  );
};

export default FreeTrialDialog;
