import { Stack, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleButton = () => {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
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
        borderColor: (theme) => theme.palette.divider,
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
        {/* {t('common:buttons.continueWithGoogle')} */}
        continueWithGoogle
      </Typography>
    </Stack>
  );
};

export default GoogleButton;
