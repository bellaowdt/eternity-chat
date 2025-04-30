"use client";

import { useMemo, useState } from "react";

// material-ui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project import
import AnimateButton from "@/components/@extended/AnimateButton";
import IconButton from "@/components/@extended/IconButton";
import MainCard from "@/components/MainCard";
import SimpleBar from "@/components/third-party/SimpleBar";

import ColorScheme from "./ColorScheme";
import ThemeLayout from "./ThemeLayout";
import ThemeMode from "./ThemeMode";
import ThemeWidth from "./ThemeWidth";

// assets
import {
  BgColorsOutlined,
  BorderInnerOutlined,
  CloseCircleOutlined,
  HighlightOutlined,
  LayoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector } from "@/store";

// ==============================|| HEADER CONTENT - CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();

  const { container, mode, presetColor, miniDrawer } = useSelector(
    (state) => state.config
  );

  const themeLayout = useMemo(
    () => <ThemeLayout />,
    [miniDrawer, theme.direction]
  );
  // eslint-disable-next-line
  const themeMode = useMemo(() => <ThemeMode />, [mode]);
  // eslint-disable-next-line
  const themeColor = useMemo(() => <ColorScheme />, [presetColor]);
  // eslint-disable-next-line
  const themeWidth = useMemo(() => <ThemeWidth />, [container]);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const iconBackColorOpen =
    theme.palette.mode === "dark" ? "grey.200" : "grey.300";
  const iconBackColor =
    theme.palette.mode === "dark" ? "background.default" : "grey.100";

  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <IconButton
          color="secondary"
          variant="light"
          sx={{
            color: "text.primary",
            bgcolor: open ? iconBackColorOpen : iconBackColor,
          }}
          onClick={handleToggle}
          aria-label="settings toggler"
        >
          <AnimateButton type="rotate">
            <SettingOutlined />
          </AnimateButton>
        </IconButton>
      </Box>
      <Drawer
        sx={{
          zIndex: 2001,
        }}
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 340,
          },
        }}
      >
        {open && (
          <MainCard
            title="Theme Customization"
            sx={{
              border: "none",
              borderRadius: 0,
              height: "100vh",
              "& .MuiCardHeader-root": {
                color: "background.paper",
                bgcolor: "primary.main",
                "& .MuiTypography-root": { fontSize: "1rem" },
              },
            }}
            content={false}
            secondary={
              <IconButton
                shape="rounded"
                size="small"
                onClick={handleToggle}
                sx={{ color: "background.paper" }}
              >
                <CloseCircleOutlined style={{ fontSize: "1.15rem" }} />
              </IconButton>
            }
          >
            <SimpleBar
              sx={{
                "& .simplebar-content": {
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  height: "calc(100vh - 64px)",
                  "& .MuiAccordion-root": {
                    borderColor: theme.palette.divider,
                    "& .MuiAccordionSummary-root": {
                      bgcolor: "transparent",
                      flexDirection: "row",
                      pl: 1,
                    },
                    "& .MuiAccordionDetails-root": {
                      border: "none",
                    },
                    "& .Mui-expanded": {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Accordion defaultExpanded sx={{ borderTop: "none" }}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: "primary.lighter" }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <LayoutOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="textPrimary">
                          Theme Layout
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Choose your layout
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeLayout}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: "primary.lighter" }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <HighlightOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="textPrimary">
                          Theme Mode
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Choose light or dark mode
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeMode}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: "primary.lighter" }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BgColorsOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="textPrimary">
                          Color Scheme
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Choose your primary theme color
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeColor}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: "primary.lighter" }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BorderInnerOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="textPrimary">
                          Layout Width
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Choose fluid or container layout
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeWidth}</AccordionDetails>
                </Accordion>
              </Box>
            </SimpleBar>
          </MainCard>
        )}
      </Drawer>
    </>
  );
};

export default Customization;
