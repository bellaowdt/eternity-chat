import { Dialog } from '@/components/Dialog';
import { DialogProps } from '@/components/Dialog/Dialog';
import { SAMPLE_CHAT_ID } from '@/constants/query-keys';
import {
  DEFAULT_DASHBOARD_CHAT_PATH,
  DEFAULT_IMAGES_PATH,
} from '@/constants/routes';
import { Button, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

export type PremiumPlanDialogProps = DialogProps;

const PremiumPlanDialog: FC<PremiumPlanDialogProps> = ({ ...props }) => {
  const t = useTranslations();
  const router = useRouter();

  const handleStartChat = () => {
    router.push(DEFAULT_DASHBOARD_CHAT_PATH + `/${SAMPLE_CHAT_ID}`);
  };
  return (
    <Dialog
      {...props}
      title={t('pages.paymentPlans.premiumSuccess.welcome')}
      maxWidth="sm"
      fullWidth
      sx={{ marginX: 'auto', ...props?.sx }}
      dialogButtons={[]}
    >
      <Stack spacing={3} alignItems="center" px={2} textAlign="center">
        <Image
          src={`${DEFAULT_IMAGES_PATH}/premuim-success.png`}
          alt=""
          width={120}
          height={120}
        />
        <Typography variant="h3">
          {t('pages.paymentPlans.premiumSuccess.welcome')}
        </Typography>
        <Typography variant="body1">
          {t('pages.paymentPlans.premiumSuccess.description')}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleStartChat}
        >
          {t('pages.paymentPlans.premiumSuccess.beginButton')}
        </Button>
      </Stack>
    </Dialog>
  );
};

export default PremiumPlanDialog;
