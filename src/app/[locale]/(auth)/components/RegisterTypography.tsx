import { DEFAULT_SIGNUP_PATH } from '@/constants/routes';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const RegisterTypography = () => {
  const t = useTranslations();
  return (
    <Typography>
      {t('pages.signIn.dontHaveAnAccount')}{' '}
      <Link href={DEFAULT_SIGNUP_PATH}>{t('pages.signUp.createAccount')}</Link>
    </Typography>
  );
};

export default RegisterTypography;
