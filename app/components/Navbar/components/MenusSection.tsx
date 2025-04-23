import { CustomButton } from "@/components/common/CustomStyle";
import {
  DEFAULT_ABOUT_PATH,
  DEFAULT_CONTACT_PATH,
  DEFAULT_FAQ_PATH,
} from "@/constants/routes";
import { Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const MenusSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const pagesMenu = [
    { label: "Menu item", href: DEFAULT_FAQ_PATH },
    { label: "Menu item", href: DEFAULT_ABOUT_PATH },
    { label: "Menu item", href: DEFAULT_CONTACT_PATH },
  ];

  return (
    <Stack
      sx={{
        p: 1,
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        flexWrap: "wrap",
        justifyContent: isSmallScreen ? "center" : "flex-start",
        alignItems: "center",
        gap: 1,
      }}
    >
      {pagesMenu.map((page) => (
        <CustomButton
          component={Link}
          href={page.href}
          key={page.label}
          sx={{
            color: theme.palette.common.white,
            textTransform: "none",
            fontSize: "0.9rem",
          }}
        >
          {page.label}
        </CustomButton>
      ))}
    </Stack>
  );
};

export default MenusSection;
