"use client";

import { useMemo } from "react";

// material-ui
import { Box, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

import Localization from "./Localization";
import MegaMenuSection from "./MegaMenuSection";
import MobileSection from "./MobileSection";
import Profile from "./Profile";
import Search from "./Search";
import Customization from "./Customization";
import { useSelector } from "@/store";
import ChangeMode from "./ChangeMode";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const i18n = useSelector((state) => state.config.i18n);

  const matchesXs = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localization = useMemo(() => <Localization />, [i18n]);

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {!matchesXs && <Search />}
      {!matchesXs && localization}
      {!matchesXs && <ChangeMode />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}
      {import.meta.env.MODE === "development" && <Customization />}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
