import { Stack, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';

const GoogleButton = () => {
  const { t } = useTranslation();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <Stack
      onClick={() => handleGoogleLogin()}
      direction="row"
      alignItems="center"
      spacing={1}
      justifyContent="space-between"
      sx={{
        p: 1,
        border: '1px solid',
        borderColor: theme => theme.palette.divider,
        cursor: 'pointer',
      }}
    >
      <img width={25} height={25} src="/assets/images/google.png" />
      <Typography
        variant="body2"
        component="span"
        sx={{
          textAlign: 'center',
          flexGrow: 1,
        }}
      >
        {t('common:buttons.continueWithGoogle')}
      </Typography>
    </Stack>
  );
};

export default GoogleButton;
