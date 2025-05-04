import { Box, Stack } from '@mui/material';
import SignOutButton from './SignOutButton';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import UserDetails from './UserDetails';

const Account = () => {
  return (
    <Stack spacing={2} pb={2}>
      <Box
        className="radial"
        sx={{
          borderRadius: 1,
          p: 4,
        }}
      >
        <UserDetails />
        <Box position="absolute" right={16} bottom={16}>
          {/* <LanguageSelector /> */}
        </Box>
      </Box>
      <Stack>
        <SignOutButton />
      </Stack>
    </Stack>
  );
};

export default Account;
