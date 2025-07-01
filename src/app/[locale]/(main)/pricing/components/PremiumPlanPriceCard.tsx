import { Box, Divider, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const PremiumPlanPriceCard = () => {
  const t = useTranslations();

  return (
    <Stack display="flex" spacing={2} mb={2}>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography variant="body2" fontWeight="bold">
          {t('pages.paymentPlans.plans.premium.price')}
        </Typography>

        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ textTransform: 'capitalize' }}
        >
          {t('pages.paymentPlans.plans.premium.duration')}
        </Typography>
      </Box>
      <Divider sx={{ width: '100%', borderColor: 'grey.300' }} />
    </Stack>
  );
};

export default PremiumPlanPriceCard;
