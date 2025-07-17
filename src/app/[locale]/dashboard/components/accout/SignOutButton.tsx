import { useTranslations } from 'next-intl';
import { ButtonWithLoading } from '@/components/ButtonWithLoading';
import { Logout } from '@mui/icons-material';
import { useState } from 'react';
import LogoutDialog from './LogoutDialog';
import DeleteChatDialog from '../../chat/[userId]/components/DeleteChatDialog';
import EndConversationDialog from '../../chat/[userId]/components/EndConversationDialog';

const SignOutButton = () => {
  const t = useTranslations();
  const [logoutDialog, setLogoutDialog] = useState(true); // TODO:

  const onToggleLogoutDialog = () => {
    setLogoutDialog((prevState) => !prevState);
  };
  return (
    <>
      <ButtonWithLoading
        onClick={onToggleLogoutDialog}
        variant="text"
        color="error"
        fullWidth
        startIcon={<Logout />}
      >
        {t('common.buttons.logout')}
      </ButtonWithLoading>
      <LogoutDialog open={logoutDialog} onClose={onToggleLogoutDialog} />
      {/* <DeleteChatDialog open={logoutDialog} onClose={onToggleLogoutDialog} /> */}
      {/* <EndConversationDialog
        open={logoutDialog}
        onClose={onToggleLogoutDialog}
      /> */}
    </>
  );
};

export default SignOutButton;
