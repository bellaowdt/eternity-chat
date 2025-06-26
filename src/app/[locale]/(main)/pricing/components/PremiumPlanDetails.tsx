'use client';

import { GREY_COLOR, NAVBAR_HEIGHT } from '@/constants/general';
import { DEFAULT_PRICING_PATH } from '@/constants/routes';
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
      <Box
        display="flex"
        minHeight={`calc(100vh - ${NAVBAR_HEIGHT}px)`}
        py={8}
        px={20}
      >
        <Stack spacing={2}>
          <Link href={DEFAULT_PRICING_PATH}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <ArrowBack fontSize="medium" />
              <Typography variant="h5" sx={{ color: GREY_COLOR }}>
                {t('common.buttons.back')}
              </Typography>
            </Box>
          </Link>
          <Typography variant="h1" fontWeight="bold">
            {t('pages.paymentPlans.premiumUpgrade.title')}
          </Typography>
          <Typography variant="h4" fontWeight={400} mt={2}>
            {t('pages.paymentPlans.premiumUpgrade.planDetailTitle')}
          </Typography>

          <Box pt={4}>
            <Typography variant="body2">
              {t('pages.paymentPlans.premiumUpgrade.planDetails')}
            </Typography>

            <List>
              {featureKeys.map((key) => (
                <ListItem
                  key={key}
                  disableGutters
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 16 }}>
                    <FiberManualRecordIcon
                      sx={{
                        color: 'black',
                        fontSize: 8,
                        flexShrink: 0,
                        mt: '14px', // aligns the icon vertically with the text
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        fontWeight={400}
                        lineHeight={1.5}
                        m={0}
                      >
                        {t(`pages.paymentPlans.premiumUpgrade.features.${key}`)}
                      </Typography>
                    }
                    slotProps={{
                      primary: {
                        variant: 'body2',
                        fontWeight: 400,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Typography variant="h4" fontWeight="bold" pt={4}>
            {t('pages.paymentPlans.premiumUpgrade.helpTitle')}
          </Typography>

          <Typography variant="body2">
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
