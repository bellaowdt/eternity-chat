import { Stack } from "@mui/material";
import PoweredBy from "@/components/PoweredBy";

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ p: "24px 16px 0px" }}
      dir="ltr"
    >
      <PoweredBy />
      {/* <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
          About us
        </Link>
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
          Privacy
        </Link>
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
          Terms
        </Link>
      </Stack> */}
    </Stack>
  );
};

export default Footer;
