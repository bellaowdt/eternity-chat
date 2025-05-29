'use client';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import PlanCard from './components/PlanCard';
import { plans, planFeatures } from './components/PaymentPlansData';
import { useState } from 'react';
import FreeTrialModal from './components/FreeTrialModal';

const PaymentPlans = () => {
  const t = useTranslations();
  const [freePlanDialog, setFreePlanDialog] = useState(false);

  const onToggleFreeTrialDialog = () => {
    setFreePlanDialog((prev) => !prev);
  };

  const planCards = plans.map((plan) => ({
    price: t(`pages.paymentPlans.plans.${plan}.price`),
    duration: t(`pages.paymentPlans.plans.${plan}.duration`),
    title: t(`pages.paymentPlans.plans.${plan}.title`),
    planType: t(`pages.paymentPlans.plans.${plan}.planType`),
    subTilte: t(`pages.paymentPlans.plans.${plan}.subTilte`),
    features: planFeatures[plan].map(({ icon, text }) => ({
      icon,
      text: t(text),
    })),
    moreDetails: t(`pages.paymentPlans.plans.${plan}.moreDetails`),
    buttonTilte: t(`pages.paymentPlans.plans.${plan}.buttonTilte`),
  }));

  return (
    <>
      <Box py={8}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Box p={4}>
              <Typography
                variant="h2"
                fontWeight={700}
                dangerouslySetInnerHTML={{
                  __html: t('pages.paymentPlans.comment.title'),
                }}
              />

              <Typography variant="h6" mt={2}>
                {t('pages.paymentPlans.comment.description1')}
              </Typography>

              <Typography variant="h6" mt={4}>
                {t('pages.paymentPlans.comment.description2')}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <PlanCard card={planCards[0]} onClick={onToggleFreeTrialDialog} />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <PlanCard card={planCards[1]} />
          </Grid>
        </Grid>
      </Box>

      {freePlanDialog && (
        <FreeTrialModal
          open={freePlanDialog}
          onClose={onToggleFreeTrialDialog}
          sx={{ width: 470 }}
        />
      )}
    </>
  );
};

export default PaymentPlans;
