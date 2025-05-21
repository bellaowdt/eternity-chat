import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Dialog } from '@/components/Dialog';
import { DialogProps } from '@/components/Dialog/Dialog';
import { useTranslations } from 'next-intl';
import { FC, SyntheticEvent, useState } from 'react';
import TabPanel from '@/components/TabPanel/TabPanel';
import { useHelpCenterMenus } from './hooks/useHelpCenterMenus';
import { DIALOG_SIDEBAR_WIDTH } from '@/constants/general';
import { Search } from '@mui/icons-material';

export type HelpCenterDialogProps = DialogProps;

const HelpCenterDialog: FC<HelpCenterDialogProps> = ({ ...props }) => {
  const t = useTranslations();
  const menus = useHelpCenterMenus();

  const [value, setValue] = useState(1);
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <Dialog
      {...props}
      title={t('common.buttons.helpCenter')}
      maxWidth="md"
      fullWidth
      sx={{ marginX: 'auto' }}
      dialogButtons={[]}
    >
      <Box display="flex">
        <Box sx={{ width: DIALOG_SIDEBAR_WIDTH, mr: 1 }}>
          <Box display="flex" alignItems="center" mb={2} px={1.5}>
            <Search fontSize="small" />
            <Typography variant="body1">
              {t('pages.helpCenter.menu.generalMsg')}
            </Typography>
          </Box>
          <Tabs
            value={value}
            orientation="vertical"
            onChange={handleChange}
            aria-label="settings tabs"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                alignItems: 'flex-start',
                borderRadius: 0.3,
                marginBottom: 1,
                color: 'text.primary',
                '&.Mui-selected': {
                  backgroundColor: (theme) => theme.palette.grey[200],
                  border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                },
              },
            }}
          >
            {menus.map((menu, index) => (
              <Tab label={menu.label} key={index} />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ flex: 1 }}>
          {menus.map((menu, index) =>
            menu.component ? (
              <TabPanel key={index} value={value} index={index}>
                {menu.component}
              </TabPanel>
            ) : null,
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default HelpCenterDialog;
