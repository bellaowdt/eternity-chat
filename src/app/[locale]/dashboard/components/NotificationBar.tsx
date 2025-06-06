import { useState } from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';

const NotificationBar = () => {
  const t = useTranslations();
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        color: 'common.white',
        px: { xs: 2, sm: 4, md: 8 },
        py: 2,
      }}
    >
      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={{ xs: 2, sm: 0 }}
      >
        {/* Left Section */}
        <Stack spacing={1}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: '#485D71' }}
          >
            {t('pages.chat.notification.title')}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#485D71' }}>
            {t('pages.chat.notification.description')}
          </Typography>
        </Stack>

        {/* Right Section - Always row */}
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            width: { xs: '100%', sm: 'auto' },
            mt: { xs: 1, sm: 0 },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 5,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              bgcolor: 'common.white',
              color: '#485D71',
              fontWeight: 'bold',
            }}
          >
            {t('pages.chat.notification.upgradeButton')}
          </Button>
          <IconButton
            onClick={() => setVisible(false)}
            sx={{ color: '#485D71', flexShrink: 0 }}
            aria-label="Close notification"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NotificationBar;
