// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - ALERT TITLE ||============================== //

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: true,
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.secondary.light}`,
          '&:not(:last-child)': {},
          '&:before': {
            display: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.secondary.lighter,
          },
          '&.Mui-expanded:first-of-type': {
            marginTop: theme.spacing(1)
          },
        },
      },
    },
  };
}
