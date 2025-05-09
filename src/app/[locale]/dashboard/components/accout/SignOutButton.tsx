import { useTranslations } from 'next-intl';
import { ButtonWithLoading } from '@/components/ButtonWithLoading';
import { Logout } from '@mui/icons-material';
import { FC } from 'react';

interface SignOutButtonProps {
  onClick: VoidFunction;
}

const SignOutButton: FC<SignOutButtonProps> = ({ onClick }) => {
  const t = useTranslations();
  return (
    <ButtonWithLoading
      onClick={onClick}
      variant="text"
      color="error"
      fullWidth
      startIcon={<Logout />}
    >
      {t('common.buttons.logout')}
    </ButtonWithLoading>
  );
};

export default SignOutButton;
