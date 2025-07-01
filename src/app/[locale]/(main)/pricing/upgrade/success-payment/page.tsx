'use client';

import SizedButton from '@/components/common/SizedButton';
import { DEFAULT_MAX_WIDTH, STAR_IMAGE } from '@/constants/general';
import { SAMPLE_CHAT_ID } from '@/constants/query-keys';
import {
  DEFAULT_DASHBOARD_CHAT_PATH,
  DEFAULT_IMAGES_PATH,
} from '@/constants/routes';
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useResponsiveScale from '../../../onboarding/hooks/useResponsiveScale ';

const SuccessPayment = () => {
  const t = useTranslations();
  const router = useRouter();

  const handleStartChat = () => {
    router.push(DEFAULT_DASHBOARD_CHAT_PATH + `/${SAMPLE_CHAT_ID}`);
  };

  const stars = [
    {
      id: 1,
      image: STAR_IMAGE,
      top: '12%',
      left: '30%',
      width: 44.7,
      height: 47.88,
    },
    {
      id: 2,
      image: STAR_IMAGE,
      top: '25%',
      left: '27%',
      width: 31,
      height: 33,
    },
    {
      id: 3,
      image: STAR_IMAGE,
      top: '65%',
      left: '30%',
      width: 22,
      height: 23,
    },
    {
      id: 4,
      image: STAR_IMAGE,
      top: '18%',
      left: '70%',
      width: 44.7,
      height: 47.88,
    },
    {
      id: 5,
      image: STAR_IMAGE,
      top: '79%',
      left: '70%',
      width: 22,
      height: 23,
    },
  ];
  const scale = useResponsiveScale();

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
            {t('pages.paymentPlans.premiumSuccess.description1')}
          </Typography>
          <Typography variant="body1">
            {t('pages.paymentPlans.premiumSuccess.description2')}
          </Typography>
          <Typography variant="body1">
            {t('pages.paymentPlans.premiumSuccess.description3')}
          </Typography>
          <SizedButton
            fullWidth
            variant="contained"
            size="large"
            onClick={handleStartChat}
          >
            {t('pages.paymentPlans.premiumSuccess.beginButton')}
          </SizedButton>
        </Stack>
      </Box>

      {stars.map(({ id, image, top, left, width, height }) => (
        <Card
          key={id}
          sx={{
            position: 'absolute',
            top,
            left,
            width: width * scale,
            height: height * scale,
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
            image={image}
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
