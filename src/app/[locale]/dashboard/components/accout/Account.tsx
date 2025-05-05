import { Box, Stack } from '@mui/material';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import UserDetails from './UserDetails';
import { useState } from 'react';
import LogoutDialog from './LogoutDialog';
import SignOutButton from './SignOutButton';

const Account = () => {
  const [logoutDialog, setLogoutDialog] = useState(false);

  const onToggleLogoutDialog = () => {
    setLogoutDialog((prevState) => !prevState);
  };

  return (
    <Stack spacing={2} pb={2}>
      <Box
        className="radial"
        sx={{
          borderRadius: 1,
          p: 4,
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
        <LogoutDialog open={logoutDialog} onClose={onToggleLogoutDialog} />
        <SignOutButton />
      </Stack>
    </Stack>
  );
};

export default Account;
