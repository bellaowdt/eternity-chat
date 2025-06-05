'use client';

import { ArrowBack } from '@mui/icons-material';
import PremiumPlanDetails from '../components/PremiumPlanDetails';
import PremiumPlanForm from '../components/PremiumPlanForm';
import { Box, Grid, Typography } from '@mui/material';

const UpgradeToPremium = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6 }} sx={{ bgcolor: '#E0F0FF' }}>
        <PremiumPlanDetails />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <PremiumPlanForm />
      </Grid>
    </Grid>
  );
};

export default UpgradeToPremium;
