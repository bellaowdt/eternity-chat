"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

// material-ui
import {
  CardMedia,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project import
import MainCard from "@/components/MainCard";
import { openDrawer } from "@/store/reducers/menu";

// assets
const defaultLayout = "/assets/images/customization/default.svg";
const miniMenu = "/assets/images/customization/mini-menu.svg";

// types
import { useSelector } from "@/store";
import { onChangeMiniDrawer } from "@/store/reducers/config";

const ThemeLayout = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const miniDrawer = useSelector((state) => state.config.miniDrawer);
  const { drawerOpen } = useSelector((state) => state.menu);

  const [value, setValue] = useState<string | null>(
    miniDrawer ? "mini" : "default"
  );
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === "default") {
      if (!drawerOpen) {
        dispatch(openDrawer({ drawerOpen: true }));
      }
      dispatch(onChangeMiniDrawer(false));
    }
    if (newValue === "mini") {
      if (drawerOpen) {
        dispatch(openDrawer({ drawerOpen: false }));
      }
      dispatch(onChangeMiniDrawer(true));
    }
  };
  return (
    <RadioGroup
      row
      aria-label="payment-card"
      name="payment-card"
      value={value}
      onChange={handleRadioChange}
    >
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            value="default"
            control={<Radio value="default" sx={{ display: "none" }} />}
            sx={{
              display: "flex",
              "& .MuiFormControlLabel-label": { flex: 1 },
            }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor:
                    value === "default"
                      ? "primary.lighter"
                      : "secondary.lighter",
                  p: 1,
                }}
                border={false}
                {...(value === "default" && {
                  boxShadow: true,
                  shadow: theme.customShadows.primary,
                })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia
                    component="img"
                    src={defaultLayout}
                    alt="Vertical"
                    sx={{ borderRadius: 1, width: 64, height: 64 }}
                  />
                  <Typography variant="caption">Default</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value="mini"
            control={<Radio value="mini" sx={{ display: "none" }} />}
            sx={{
              display: "flex",
              "& .MuiFormControlLabel-label": { flex: 1 },
            }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor:
                    value === "mini" ? "primary.lighter" : "secondary.lighter",
                  p: 1,
                }}
                border={false}
                {...(value === "mini" && {
                  boxShadow: true,
                  shadow: theme.customShadows.primary,
                })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia
                    component="img"
                    src={miniMenu}
                    alt="Vertical"
                    sx={{ borderRadius: 1, width: 64, height: 64 }}
                  />
                  <Typography variant="caption">Mini Drawer</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
};

export default ThemeLayout;
