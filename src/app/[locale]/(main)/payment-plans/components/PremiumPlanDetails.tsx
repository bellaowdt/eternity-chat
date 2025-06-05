'use client';

import { NAVBAR_HEIGHT } from '@/constants/general';
import { DEFAULT_PLAYMENT_PLANS_PATH } from '@/constants/routes';
import { ArrowBack } from '@mui/icons-material';
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
import Link from 'next/link';

const PremiumPlanDetails = () => {
  const t = useTranslations();
  const featureKeys = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];

  return (
    <>
      <Box display="flex" height={`calc(100vh - ${NAVBAR_HEIGHT}px)`} p={8}>
        <Stack spacing={2}>
          <Link href={DEFAULT_PLAYMENT_PLANS_PATH}>
            <Box display="flex" alignItems="center" gap={1} mb={4}>
              <ArrowBack fontSize="medium" />
              <Typography variant="h5" sx={{ color: '#3D3D3D' }}>
                {t('common.buttons.back')}
              </Typography>
            </Box>
          </Link>
          <Typography variant="h1" fontWeight={700}>
            {t('pages.paymentPlans.premiumUpgrade.title')}
          </Typography>
          <Typography variant="h4" fontWeight={400} mt={4}>
            {t('pages.paymentPlans.premiumUpgrade.planDetailTitle')}
          </Typography>

          <Box pt={4}>
            <Typography variant="h4">
              {t('pages.paymentPlans.premiumUpgrade.planDetails')}
            </Typography>

            <List dense>
              {featureKeys.map((key) => (
                <ListItem key={key} disableGutters>
                  <ListItemIcon sx={{ minWidth: 16 }}>
                    <FiberManualRecordIcon
                      sx={{ color: 'black', fontSize: 8 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={t(
                      `pages.paymentPlans.premiumUpgrade.features.${key}`,
                    )}
                    sx={{ fontWeight: 400, fontSize: '1.25rem' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Typography variant="h4" fontWeight="700">
            {t('pages.paymentPlans.premiumUpgrade.helpTitle')}
          </Typography>

          <Typography variant="body1">
            {t.rich('pages.paymentPlans.premiumUpgrade.helpDescription', {
              support: (chunks) => <Link href="/support">{chunks}</Link>,
              faq: (chunks) => <Link href="/faq">{chunks}</Link>,
            })}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default PremiumPlanDetails;
