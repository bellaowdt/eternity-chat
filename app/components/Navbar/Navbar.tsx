"use client";

import React from "react";
import {
  AppBar,
  Box,
  useTheme,
  Container,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../common/Logo";
import MenusSection from "./components/MenusSection";
import { DEFAULT_HOME_PAGE_PATH } from "@/constants/routes";

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        p: 0,
        height: 80,
        backgroundColor: theme.palette.common.black,
        top: 0,
        zIndex: theme.zIndex.drawer,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          px: { xs: 2, sm: 3, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display={{ xs: "none", md: "flex" }} width="100%">
          <Link href={DEFAULT_HOME_PAGE_PATH}>
            <Logo />
          </Link>
          <MenusSection />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="medium"
              fullWidth
              sx={{
                borderRadius: 8,
                backgroundColor: theme.palette.common.white,
                color: theme.palette.common.black,
              }}
            >
              Let’s Start
            </Button>
          </Box>
        </Box>

        <Box display={{ xs: "flex", md: "none" }} p={1}>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <MenuIcon />
          </IconButton>
          <Link href={DEFAULT_HOME_PAGE_PATH}>
            <Logo />
          </Link>
        </Box>
      </Container>

      {mobileOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            width: "100vw",
            backgroundColor: theme.palette.background.default,
          }}
        >
          {/* <MenusSection /> */} MenusSection
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
