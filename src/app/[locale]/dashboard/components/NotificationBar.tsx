import { useState } from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NotificationBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        backgroundColor: '#303030',
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
          <Typography fontWeight="bold">
            🔔 Free Trial: 6 days remaining
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            You’re using the free version with text chat only. Upgrade anytime
            to unlock voice, memory recall, and more.
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
            size="small"
            sx={{
              borderRadius: 5,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Upgrade your Plan
          </Button>
          <IconButton
            onClick={() => setVisible(false)}
            sx={{ color: 'white', flexShrink: 0 }}
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
