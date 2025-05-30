'use client';

import { NAVBAR_HEIGHT } from '@/constants/general';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';

const PremiumPlanDetails = () => {
  const t = useTranslations();
  const featureKeys = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={`calc(100vh - ${NAVBAR_HEIGHT}px)`}
      px={3}
    >
      <Stack spacing={2}>
        <Typography variant="h3">
          {t('pages.paymentPlans.premiumUpgrade.title')}
        </Typography>
        <Typography variant="body1" mt={4}>
          {t('pages.paymentPlans.premiumUpgrade.planDetailTitle')}
        </Typography>

        <Box pt={4}>
          <Typography variant="h5">
            {t('pages.paymentPlans.premiumUpgrade.planDetails')}
          </Typography>

          <List dense>
            {featureKeys.map((key) => (
              <ListItem key={key} disableGutters>
                <ListItemIcon sx={{ minWidth: 16 }}>
                  <FiberManualRecordIcon sx={{ color: 'black', fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText
                  primary={t(
                    `pages.paymentPlans.premiumUpgrade.features.${key}`,
                  )}
                  sx={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Typography variant="h5" fontWeight="bold">
          {t('pages.paymentPlans.premiumUpgrade.helpTitle')}
        </Typography>

        <Typography variant="body1">
          {t('pages.paymentPlans.premiumUpgrade.helpDescription')}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PremiumPlanDetails;
