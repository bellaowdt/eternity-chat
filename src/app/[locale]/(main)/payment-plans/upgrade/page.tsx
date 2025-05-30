'use client';

import PremiumPlanDetails from '../components/PremiumPlanDetails';
import PremiumPlanForm from '../components/PremiumPlanForm';
import { Grid } from '@mui/material';

const UpgradeToPremium = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6 }} sx={{ bgcolor: '#F2F2F2' }}>
        <PremiumPlanDetails />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <PremiumPlanForm />
      </Grid>
    </Grid>
  );
};

export default UpgradeToPremium;
