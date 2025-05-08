import { Box, Tab, Tabs } from '@mui/material';
import { Dialog } from '@/components/Dialog';
import { DialogProps } from '@/components/Dialog/Dialog';
import { useTranslations } from 'next-intl';
import { FC, SyntheticEvent, useState } from 'react';
import TabPanel from '@/components/TabPanel/TabPanel';
import { useSettingMenus } from './hooks/useSettingMenus';

export type SettingDialogProps = DialogProps;
const SettingDialog: FC<SettingDialogProps> = ({ ...props }) => {
  const t = useTranslations();
  const menus = useSettingMenus();

  const [value, setValue] = useState(0);
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <Dialog
      {...props}
      title={t('common.buttons.setting')}
      // maxWidth="md"
      // fullWidth
      sx={{ width: 900, marginX: 'auto' }}
      dialogButtons={[]}
    >
      <Box display="flex">
        <Box sx={{ width: 180, mr: 3 }}>
          <Tabs
            value={value}
            orientation="vertical"
            onChange={handleChange}
            aria-label="settings tabs"
            sx={{
              '& .MuiTab-root': {
                justifyContent: 'center',
                textTransform: 'none',
                alignItems: 'flex-start',
                padding: 1,
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
          {menus.map((menu, index) => (
            <TabPanel key={index} value={value} index={index}>
              {menu.component}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
};

export default SettingDialog;
