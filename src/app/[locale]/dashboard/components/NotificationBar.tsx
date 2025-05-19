import { Box, Button, IconButton, Stack, Typography } from '@mui/material';

const NotificationBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#303030',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 8,
        py: 1,
      }}
    >
      <Stack spacing={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontWeight="bold">
            🔔 Free Trial: 6 days remaining
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.75)' }}>
          You’re using the free version with text chat only. Upgrade anytime to
          unlock voice, memory recall, and more.
        </Typography>
      </Stack>

      <Stack direction="row" spacing={8} alignItems="center">
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ borderRadius: 5 }}
        >
          Upgrade your Plan
        </Button>
        <IconButton sx={{ color: 'white' }}>✕</IconButton>
      </Stack>
    </Box>
  );
};

export default NotificationBar;
