import { Link, Typography } from '@mui/material';

const PoweredBy = () => {
  return (
    <Typography
      variant="caption"
      component={Link}
      href="https://ragsplus.com/"
      target="_blank"
      dir='ltr'
    >
      Powered by Rags+
    </Typography>
  );
};

export default PoweredBy;
