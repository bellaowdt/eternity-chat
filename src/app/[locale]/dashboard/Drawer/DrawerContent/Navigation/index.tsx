// material-ui
import { Box, Typography } from "@mui/material";

// project import
import { useSelector } from "@/store";
import useMenuItem from "../../hooks/useMenuItem";
import NavGroup from "./NavGroup";
import NavSkeleton from "./NavSkeleton";

const Navigation = () => {
  const menu = useMenuItem();
  const privileges = useSelector((state) => state.privileges.value);

  const drawerOpen = useSelector((state) => state.menu.drawerOpen);

  const isMenuLoading = Object.keys(privileges).length === 0;

  if (isMenuLoading) {
    return (
      <Box mt={2}>
        {new Array(5).fill(0).map((_item, index) => {
          return <NavSkeleton key={index} />;
        })}
      </Box>
    );
  }

  const navGroups = [menu].map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return (
    <Box sx={{ pt: drawerOpen ? 2 : 0, "& > ul:first-of-type": { mt: 0 } }}>
      {navGroups}
    </Box>
  );
};

export default Navigation;
