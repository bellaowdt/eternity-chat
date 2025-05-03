import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Stack,
  StackProps,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import Transitions from '../Transitions/Transitions';
import { languages } from '@/configs/languages';

export interface LanguageSelectorProps extends StackProps {
  mobileView?: boolean;
}

const LanguageSelector: FC<LanguageSelectorProps> = (props) => {
  const theme = useTheme();
  const t = useTranslations();

  const [anchorEl, setAnchorEl] = useState(null);
  const mdBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (lang) => {
    // dispatch(onChangeLocalization(lang));
    handleClose();
  };

  return (
    <>
      <Tooltip placement="top" title="changeLanguage">
        {/* title={t('common:tooltips.changeLanguage')} */}
        <Stack
          onClick={handleToggle}
          direction="row"
          justifyContent="center"
          {...props}
          sx={{
            cursor: 'pointer',
            ...props.sx,
            width: props.mobileView ? 36 : undefined,
          }}
        >
          <Stack direction="row" spacing={1}>
            {!props.mobileView && (
              <>
                <span className={`fi fi-${languages[i18n].flag}`}></span>
                <Typography>{languages[i18n].label}</Typography>
              </>
            )}

            {props.mobileView && (
              //   <Typography>{i18n.toUpperCase().split('-')?.[0]}</Typography>
              <Typography>test</Typography>
            )}
          </Stack>

          {!props.mobileView && <ArrowDropDownIcon />}
        </Stack>
      </Tooltip>
      <Popper
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
        placement={mdBreakpoint ? 'bottom-end' : 'bottom'}
        open={!!anchorEl}
        anchorEl={anchorEl}
        role={undefined}
        transition
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [60, 0],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={!!anchorEl} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.shadows[2], ml: '1rem' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  dense
                  component="nav"
                  sx={{
                    p: 0,
                    minWidth: 180,
                    maxWidth: 450,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 0.5,
                    [theme.breakpoints.down('md')]: {
                      maxWidth: 250,
                    },
                  }}
                >
                  {Object.keys(languages).map((key, index) => {
                    const item = languages[key];
                    return (
                      <ListItemButton
                        selected={item.symbol === i18n}
                        key={index}
                        onClick={() => handleChangeLang(key)}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontFamily: `${item.fontFamily} !important`,
                              }}
                            >
                              {' '}
                              <span
                                style={{ padding: '0 1rem' }}
                                className={`fi fi-${item.flag}`}
                              ></span>{' '}
                              {item.label}
                            </Typography>
                          }
                        ></ListItemText>
                      </ListItemButton>
                    );
                  })}
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default LanguageSelector;
