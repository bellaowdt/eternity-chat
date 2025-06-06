'use client';

import { Grid } from '@mui/material';
import PremiumPlanDetails from '../components/PremiumPlanDetails';
import PremiumPlanForm from '../components/PremiumPlanForm';

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
