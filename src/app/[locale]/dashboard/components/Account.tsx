import { Box, Stack } from '@mui/material';
import SignOutButton from './SignOutButton';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import UserDetails from './UserDetails';

const Account = () => {
  return (
    <Stack spacing={2} height="100%" pb={2}>
      <Box
        className="radial"
        sx={{
          borderRadius: 1.5,
          p: 2,
          py: 4,
          position: 'relative',
        }}
      >
        <UserDetails />
        <Box position="absolute" right={16} bottom={16}>
          {/* <LanguageSelector /> */}
          LanguageSelector
        </Box>
      </Box>

      <Stack>
        <SignOutButton />
      </Stack>
    </Stack>
  );
};

export default Account;
