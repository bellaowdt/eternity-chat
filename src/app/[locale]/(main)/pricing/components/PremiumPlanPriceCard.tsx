import { alpha, Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const PremiumPlanPriceCard = () => {
  const t = useTranslations();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      borderRadius={0.5}
      sx={{
        bgcolor: '#F5F5F5',
        border: '1px solid',
        borderColor: (theme) => alpha(theme.palette.common.black, 0.1),
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        {t('pages.paymentPlans.payment.premiumPlan')}
      </Typography>

      <Typography variant="h5" fontWeight="bold">
        {t('pages.paymentPlans.plans.premium.price')}
      </Typography>
    </Box>
  );
};

export default PremiumPlanPriceCard;
