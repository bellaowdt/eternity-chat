import { ButtonWithLoading } from '@/components/ButtonWithLoading';
import { Typography } from '@mui/material';
import Image from 'next/image';

const GoogleLoginButton = () => {
  return (
    <ButtonWithLoading
      fullWidth
      component={'a'}
      variant="outlined"
      color="inherit"
      startIcon={
        <Image alt="" width={25} height={25} src="/assets/images/google.png" />
      }
    >
      <Typography
        variant="body2"
        component="span"
        sx={{
          textAlign: 'center',
        }}
      >
        Continue with Google
      </Typography>
    </ButtonWithLoading>
  );
};

export default GoogleLoginButton;
