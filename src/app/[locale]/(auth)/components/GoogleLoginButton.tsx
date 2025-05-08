import { ButtonWithLoading } from '@/components/ButtonWithLoading';
import { GOOGLE_ICON } from '@/constants/general';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const GoogleLoginButton = () => {
  const t = useTranslations();
  return (
    <ButtonWithLoading
      fullWidth
      component={'a'}
      variant="outlined"
      color="inherit"
      startIcon={<Image alt="" width={25} height={25} src={GOOGLE_ICON} />}
    >
      <Typography
        variant="body2"
        component="span"
        sx={{
          textAlign: 'center',
        }}
      >
        {t('common.buttons.googleBtn')}
      </Typography>
    </ButtonWithLoading>
  );
};

export default GoogleLoginButton;
