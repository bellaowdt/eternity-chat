import RollbackSwitch from '@/components/RollbackSwitch/RollbackSwitch';
import { Divider, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';

const NotificationPreference = () => {
  const t = useTranslations();

  const items = [
    {
      key: 'email',
      title: t('pages.settings.notifications.email'),
    },
    {
      key: 'inApp',
      title: t('pages.settings.notifications.inApp'),
    },
    {
      key: 'push',
      title: t('pages.settings.notifications.push'),
    },
  ];

  const onChange = useCallback((key: string, value: boolean) => {
    console.log(`Changed ${key} to`, value);
  }, []);

  return (
    <>
      {items.map((item) => (
        <>
          <Grid container py={1.5} key={item.key}>
            <Grid size={{ xs: 6 }}>
              <Typography variant="body1">{item.title}</Typography>
            </Grid>
            <Grid size={{ xs: 6 }} textAlign="right">
              <RollbackSwitch
                size="small"
                value={false}
                onChange={(value) => onChange(item.key, true)}
              />
            </Grid>
          </Grid>
          <Divider />
        </>
      ))}
    </>
  );
};

export default NotificationPreference;
