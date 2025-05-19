import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NotificationBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#303030',
        color: 'white',
        px: { xs: 2, sm: 4, md: 8 },
        py: 2,
        flex: 1,
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

        {/* Right Section - Button + Close Icon always in a row */}
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{
            width: { xs: '100%', sm: 'auto' },
            justifyContent: { xs: 'flex-end', sm: 'flex-start' },
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
            }}
          >
            Upgrade your Plan
          </Button>
          <IconButton sx={{ color: 'white' }} aria-label="Close notification">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NotificationBar;
