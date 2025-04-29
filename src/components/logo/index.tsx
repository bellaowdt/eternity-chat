import { To } from "history";

// material-ui
import { ButtonBase, Link } from "@mui/material";
import { SxProps } from "@mui/system";

// project import
import { DEFAULT_PATH, ADMIN_DEFAULT_PATH } from "@/configs/config";
import LogoIcon from "./LogoIcon";
import Logo from "./LogoMain";
import { useSelector } from "react-redux";

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

const LogoSection = ({ reverse, isIcon, sx, to }: Props) => {
  let defaultPath = DEFAULT_PATH;
  const privileges = useSelector((state: any) => state.privileges?.value);
  if (privileges?.["Request Admin"]) {
    defaultPath = ADMIN_DEFAULT_PATH;
  }

  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={!to ? defaultPath : to}
      sx={sx}
    >
      {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
    </ButtonBase>
  );
};

export default LogoSection;
