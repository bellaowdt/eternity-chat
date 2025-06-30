import { useAppContext } from '@/hooks/useAppContext';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const PlanDescriptionCard = () => {
  const t = useTranslations();
  const { isMobile } = useAppContext();
  return (
    <Box
      px={isMobile ? 1 : 4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100%"
      width="100%"
      maxWidth="customSize"
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        dangerouslySetInnerHTML={{
          __html: t('pages.paymentPlans.comment.title'),
        }}
      />

      <Typography variant="body2" mt={4}>
        {t('pages.paymentPlans.comment.description1')}
      </Typography>

      <Typography variant="body2" mt={4}>
        {t('pages.paymentPlans.comment.description2')}
      </Typography>
    </Box>
  );
};

export default PlanDescriptionCard;
