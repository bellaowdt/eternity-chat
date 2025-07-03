'use client';

import SizedButton from '@/components/common/SizedButton';
import { DEFAULT_MAX_WIDTH, STAR_IMAGE } from '@/constants/general';
import { SAMPLE_CHAT_ID } from '@/constants/query-keys';
import {
  DEFAULT_DASHBOARD_CHAT_PATH,
  DEFAULT_IMAGES_PATH,
} from '@/constants/routes';
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SuccessPayment = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const handleStartChat = () => {
    router.push(DEFAULT_DASHBOARD_CHAT_PATH + `/${SAMPLE_CHAT_ID}`);
  };

  const starImg = STAR_IMAGE;
  const stars = [
    {
      id: 1,
      top: { xs: '5%', sm: '12%', md: '12%' },
      left: { xs: '20%', sm: '28%', md: '28%' },
      width: 44.7,
      height: 47.88,
    },
    {
      id: 2,
      top: { xs: '22%', sm: '25%', md: '25%' },
      left: { xs: '18%', sm: '23%', md: '23%' },
      width: 31,
      height: 33,
    },
    {
      id: 3,
      top: { xs: '65%', sm: '69%', md: '69%' },
      left: { xs: '15%', sm: '28%', md: '28%' },
      width: 22,
      height: 23,
    },
    {
      id: 4,
      top: { xs: '14%', sm: '16%', md: '16%' },
      left: { xs: '70%', sm: '70%', md: '70%' },
      width: 44.7,
      height: 47.88,
    },
    {
      id: 5,
      top: { xs: '80%', sm: '79%', md: '79%' },
      left: { xs: '75%', sm: '69%', md: '69%' },
      width: 22,
      height: 23,
    },
  ];

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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={`${DEFAULT_IMAGES_PATH}/premuim-success.png`}
            alt=""
            width={120}
            height={120}
          />

          <Typography variant="h3" className={`latoStyle-${locale}`} pt={1}>
            {t('pages.paymentPlans.premiumSuccess.welcome')}
          </Typography>
          <Box
            maxWidth={DEFAULT_MAX_WIDTH}
            textAlign="center"
            mt={2}
            width="100%"
            px={1}
            py={2}
          >
            <Typography variant="body1" className={`latoStyle-${locale}`}>
              {t('pages.paymentPlans.premiumSuccess.description1')}
            </Typography>
            <Typography variant="body1" className={`latoStyle-${locale}`}>
              {t('pages.paymentPlans.premiumSuccess.description2')}
            </Typography>
            <Typography
              variant="body1"
              className={`latoStyle-${locale}`}
              mt={3}
            >
              {t('pages.paymentPlans.premiumSuccess.description3')}
            </Typography>
          </Box>
          <SizedButton
            fullWidth
            variant="contained"
            size="large"
            onClick={handleStartChat}
            sx={{ fontWeight: '700' }}
          >
            {t('pages.paymentPlans.premiumSuccess.beginButton')}
          </SizedButton>
        </Box>
      </Box>

      {stars.map(({ id, top, left, width, height }) => (
        <Card
          key={id}
          sx={{
            position: 'absolute',
            top,
            left,
            width,
            height,
            overflow: 'hidden',
            transition: 'all 0.6s ease-in-out',
            background: 'transparent',
            boxShadow: 'none',
            border: 'none',
            animation: `${id % 2 === 0 ? 'float' : 'pulse'} ${
              5 + id
            }s ease-in-out infinite`,
            pointerEvents: 'none',
            zIndex: 0,
            '@keyframes float': {
              '0%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-8px)' },
              '100%': { transform: 'translateY(0)' },
            },
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', opacity: 1 },
              '50%': { transform: 'scale(1.1)', opacity: 0.3 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            },
          }}
        >
          <CardMedia
            component="img"
            image={starImg}
            alt=""
            sx={{
              border: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Card>
      ))}
    </Box>
  );
};

export default SuccessPayment;
