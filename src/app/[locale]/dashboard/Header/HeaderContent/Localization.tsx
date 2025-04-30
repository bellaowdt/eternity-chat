"use client";

import { useRef, useState } from "react";
import {
  Box,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import IconButton from "@/components/@extended/IconButton";
import Transitions from "@/components/@extended/Transitions";

import { TranslationOutlined } from "@ant-design/icons";
import { LanguagesType, languages } from "@/configs/languages";
import { languageMapper } from "@/themes";
import { useDispatch, useSelector } from "@/store";
import { onChangeLocalization } from "@/store/reducers/config";

const Localization = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

  const i18n = useSelector((state) => state.config.i18n);

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const dispatch = useDispatch();
  const handleListItemClick = (lang: LanguagesType) => {
    dispatch(onChangeLocalization(lang));
    setOpen(false);
  };

  const iconBackColorOpen =
    theme.palette.mode === "dark" ? "grey.200" : "grey.300";
  const iconBackColor =
    theme.palette.mode === "dark" ? "background.default" : "grey.100";
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{
          color: "text.primary",
          bgcolor: open ? iconBackColorOpen : iconBackColor,
        }}
        aria-label="open localization"
        ref={anchorRef}
        aria-controls={open ? "localization-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <TranslationOutlined />
      </IconButton>
      <Popper
        placement={matchesXs ? "bottom-start" : "bottom"}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [matchesXs ? 0 : 0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.customShadows.z1 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  component="nav"
                  sx={{
                    p: 0,
                    width: "100%",
                    minWidth: 200,
                    maxWidth: 290,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 0.5,
                    [theme.breakpoints.down("md")]: {
                      maxWidth: 250,
                    },
                  }}
                >
                  {languages.map((item, index) => (
                    <ListItemButton
                      selected={item.symbol === i18n}
                      key={index}
                      onClick={() => handleListItemClick(item.symbol)}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: `${
                                languageMapper[item.symbol].fontFamily
                              } !important`,
                            }}
                          >
                            {" "}
                            <span
                              style={{ padding: "0 1rem" }}
                              className={`fi fi-${item.flag}`}
                            ></span>{" "}
                            {item.name}
                          </Typography>
                        }
                      ></ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Localization;
