import { ChangeEvent } from "react";

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

// assets
const defaultLayout = "/assets/images/customization/default.svg";
const darkLayout = "/assets/images/customization/dark.svg";

import { useDispatch } from "@/store";
import { onChangeMode } from "@/store/reducers/config";
import { ThemeMode } from "@/types/config";

// ==============================|| CUSTOMIZATION - MODE ||============================== //

const ThemeModeLayout = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const dispatch = useDispatch();

  const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeMode(event.target.value as ThemeMode));
  };

  return (
    <RadioGroup
      row
      aria-label="payment-card"
      name="payment-card"
      value={mode}
      onChange={handleModeChange}
    >
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid>
          <FormControlLabel
            control={<Radio value="light" sx={{ display: "none" }} />}
            sx={{
              display: "flex",
              "& .MuiFormControlLabel-label": { flex: 1 },
            }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor:
                    mode === "light" ? "primary.lighter" : "secondary.lighter",
                  p: 1,
                }}
                border={false}
                {...(mode === "light" && {
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
                  <Typography variant="caption">Light</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value="dark" sx={{ display: "none" }} />}
            sx={{
              display: "flex",
              "& .MuiFormControlLabel-label": { flex: 1 },
            }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor:
                    mode === "dark" ? "primary.lighter" : "secondary.lighter",
                  p: 1,
                }}
                border={false}
                {...(mode === "dark" && {
                  boxShadow: true,
                  shadow: theme.customShadows.primary,
                })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia
                    component="img"
                    src={darkLayout}
                    alt="Vertical"
                    sx={{ borderRadius: 1, width: 64, height: 64 }}
                  />
                  <Typography variant="caption">Dark</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
};

export default ThemeModeLayout;
