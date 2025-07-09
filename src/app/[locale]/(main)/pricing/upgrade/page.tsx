'use client';

import { Grid } from '@mui/material';
import PremiumPlanDetails from '../components/PremiumPlanDetails';
import PremiumPlanForm from '../components/PremiumPlanForm';
import { LAYOUT_BACKGROUND_BLUE } from '@/constants/general';

const UpgradeToPremium = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6 }} sx={{ bgcolor: LAYOUT_BACKGROUND_BLUE }}>
        <PremiumPlanDetails />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <PremiumPlanForm />
      </Grid>
    </Grid>
  );
};

export default UpgradeToPremium;
