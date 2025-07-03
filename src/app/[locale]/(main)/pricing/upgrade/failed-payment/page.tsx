'use client';

import SizedButton from '@/components/common/SizedButton';
import { DEFAULT_MAX_WIDTH } from '@/constants/general';
import { SAMPLE_CHAT_ID } from '@/constants/query-keys';
import {
  DEFAULT_DASHBOARD_CHAT_PATH,
  DEFAULT_IMAGES_PATH,
} from '@/constants/routes';
import { Box, Stack, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FailedPayment = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const handleStartChat = () => {
    router.push(DEFAULT_DASHBOARD_CHAT_PATH + `/${SAMPLE_CHAT_ID}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100%"
      mx="auto"
      position="relative"
    >
      <Box
        maxWidth={DEFAULT_MAX_WIDTH}
        width={{ xs: '90%', sm: 420, md: DEFAULT_MAX_WIDTH }}
        p={3}
        bgcolor="common.white"
        boxShadow={4}
        borderRadius={0.5}
      >
        <Stack spacing={3} alignItems="center" px={2} textAlign="center">
          <Box
            display="flex"
            justifyContent="center"
            bgcolor="#FFEDED"
            borderRadius="100%"
            p={2.5}
          >
            <Box
              display="flex"
              justifyContent="center"
              bgcolor="red"
              borderRadius="100%"
              p={1.8}
            >
              <Image
                src={`${DEFAULT_IMAGES_PATH}/failed-icon.png`}
                alt=""
                width={100}
                height={100}
              />
            </Box>
          </Box>
          <Typography variant="h3">
            {t('pages.paymentPlans.premiumFailed.errorMsg')}
          </Typography>
          <Box maxWidth={DEFAULT_MAX_WIDTH} px={6}>
            <Typography variant="body1" className={`latoStyle-${locale}`}>
              {t('pages.paymentPlans.premiumFailed.description1')}
            </Typography>
            <Typography variant="body1" className={`latoStyle-${locale}`}>
              {t('pages.paymentPlans.premiumFailed.description2')}
            </Typography>
          </Box>

          <SizedButton
            fullWidth
            variant="contained"
            size="large"
            onClick={handleStartChat}
            sx={{ fontWeight: '700' }}
          >
            {t('pages.paymentPlans.premiumFailed.failButton')}
          </SizedButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default FailedPayment;
