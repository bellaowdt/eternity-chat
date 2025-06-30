'use client';

import { NAVBAR_HEIGHT } from '@/constants/general';
import { DEFAULT_PLAYMENT_PLANS_UPGRADE_PATH } from '@/constants/routes';
import { useAppContext } from '@/hooks/useAppContext';
import { Box, Card, Grid, Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FreeTrialDialog from './components/FreeTrialDialog';
import { planFeatures, plans } from './components/PaymentPlansData';
import PlanCard from './components/PlanCard';
import PlanDescriptionCard from './components/PlanDescriptionCard';

const PaymentPlans = () => {
  const t = useTranslations();
  const router = useRouter();
  const { isMobile } = useAppContext();

  const [freePlanDialog, setFreePlanDialog] = useState(false);

  const onToggleFreeTrialDialog = () => {
    setFreePlanDialog((prev) => !prev);
  };

  const onUpgradePlan = () => {
    router.push(DEFAULT_PLAYMENT_PLANS_UPGRADE_PATH);
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
      <Paper
        elevation={1}
        sx={{
          px: 1.5,
          py: 1,
          borderTop: `8px solid #334`,
          backgroundColor: '#fdecea',
        }}
      >
        <Box display="flex" alignItems="center" gap={1} height={200}>
          <Typography variant="body2" fontWeight={600}>
            labele
          </Typography>
        </Box>
      </Paper>
      <Box
        p={{ xs: 4, sm: 8 }}
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
        height={isMobile ? '100%' : `calc(100vh - ${NAVBAR_HEIGHT}px)`}
      >
        <Grid container spacing={isMobile ? 4 : 2} gap={2}>
          <Grid size={{ xs: 12, sm: 5 }}>
            <PlanDescriptionCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Card
              sx={{
                borderRadius: 1,
                padding: 3,
                mx: 'auto',
                backgroundColor: '#fff',
                boxShadow: 2,
                position: 'relative',
              }}
            >
              <PlanCard
                card={planCards[0]}
                onClick={onToggleFreeTrialDialog}
                planFormat={plans[0]}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Paper
              elevation={1}
              sx={{
                borderTop: (theme) =>
                  `28px solid ${theme.palette.primary.main}`,
                backgroundColor: 'common.white',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                position="relative"
                bgcolor="pink"
                borderTopLeftRadius={2}
              >
                <PlanCard
                  card={planCards[1]}
                  onClick={onUpgradePlan}
                  planFormat={plans[1]}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {freePlanDialog && (
        <FreeTrialDialog
          open={freePlanDialog}
          onClose={onToggleFreeTrialDialog}
          sx={{ width: 470 }}
        />
      )}
    </>
  );
};

export default PaymentPlans;
