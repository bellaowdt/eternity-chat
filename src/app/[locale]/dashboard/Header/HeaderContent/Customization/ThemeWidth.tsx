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
import { useDispatch, useSelector } from "@/store";
import { onChangeContainer } from "@/store/reducers/config";

// assets
const defaultLayout = "/assets/images/customization/default.svg";
const containerLayout = "/assets/images/customization/container.svg";

// ==============================|| CUSTOMIZATION - CONTAINER ||============================== //

const ThemeWidth = () => {
  const theme = useTheme();

  const container = useSelector((state) => state.config.container);
  const dispatch = useDispatch();

  const handleContainerChange = () => {
    dispatch(onChangeContainer());
  };

  return (
    <RadioGroup
      row
      aria-label="payment-card"
      name="payment-card"
      value={container ? "container" : "fluid"}
      onChange={handleContainerChange}
    >
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value="fluid" sx={{ display: "none" }} />}
            sx={{
              display: "flex",
              "& .MuiFormControlLabel-label": { flex: 1 },
            }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor: !container ? "primary.lighter" : "secondary.lighter",
                  p: 1,
                }}
                border={false}
                {...(!container && {
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
                  <Typography variant="caption">Fluid</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value="container" sx={{ display: "none" }} />}
            sx={{
              display: "flex",
              "& .MuiFormControlLabel-label": { flex: 1 },
            }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor: container ? "primary.lighter" : "secondary.lighter",
                  p: 1,
                }}
                border={false}
                {...(container && {
                  boxShadow: true,
                  shadow: theme.customShadows.primary,
                })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia
                    component="img"
                    src={containerLayout}
                    alt="Vertical"
                    sx={{ borderRadius: 1, width: 64, height: 64 }}
                  />
                  <Typography variant="caption">Container</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
};

export default ThemeWidth;
