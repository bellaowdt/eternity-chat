import { useTranslations } from 'next-intl';
import { ButtonWithLoading } from '@/components/ButtonWithLoading';
import { Logout } from '@mui/icons-material';

const SignOutButton = () => {
  const t = useTranslations();
  //   const { mutateAsync, isPending } = useMutation({
  //     mutationFn: auth.logout,
  //   });

  const handleClickOnSignOut = async () => {
    //   await mutateAsync();
  };

  return (
    <ButtonWithLoading
      //   isLoading={isPending}
      onClick={handleClickOnSignOut}
      variant="outlined"
      color="error"
      startIcon={<Logout />}
    >
      {t('common.buttons.signOut')}
    </ButtonWithLoading>
  );
};

export default SignOutButton;
