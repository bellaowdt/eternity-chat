import RollbackSwitch from '@/components/RollbackSwitch/RollbackSwitch';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';

const PrivacySettings = () => {
  const t = useTranslations();
  const onChange = useCallback((key: string, value: boolean) => {
    console.log(`Changed ${key} to`, value);
  }, []);
  return (
    <>
      <Grid container alignItems="center" py={2}>
        <Grid size={{ xs: 10 }}>
          <Typography variant="body1">
            {t('pages.settings.privacy.twoFactorAuthentication')}
          </Typography>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <RollbackSwitch
            size="small"
            value={false}
            onChange={() => onChange('twoFactorAuthentication', true)}
          />
        </Grid>
      </Grid>
      <Divider />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={2}
      >
        <Typography>{t('pages.settings.privacy.sessionManagemnet')}</Typography>
        <ChevronRightIcon />
      </Box>
      <Divider />

      <Box mt={4} display="flex" justifyContent="flex-end">
        <Button variant="contained"> {t('common.buttons.saveChanges')}</Button>
      </Box>
    </>
  );
};

export default PrivacySettings;
