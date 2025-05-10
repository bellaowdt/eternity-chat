import { Notifications } from '@mui/icons-material';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import SettingDialog from '../setting/Setting';

interface SidebarMenusProps {
  collapsed: boolean;
}

const SidebarMenus: FC<SidebarMenusProps> = ({ collapsed }) => {
  const t = useTranslations();

  const [settingDialog, setSettingDialog] = useState(false);
  const onToggleSettingDialog = () => {
    setSettingDialog((prevState) => !prevState);
  };

  const menus = [
    { text: t('common.sidebar.menu.notification'), icon: <Notifications /> },
    { text: t('common.sidebar.menu.settings'), icon: <SettingsIcon /> },
    {
      text: t('common.sidebar.menu.helpCenter'),
      icon: <ContactSupportOutlinedIcon />,
    },
    {
      text: t('common.sidebar.menu.PrivacyPolicy'),
      icon: <LockOutlinedIcon />,
    },
  ];
  return (
    <>
      <List>
        {menus.map(({ text, icon }) => (
          <>
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  px: collapsed ? 1 : 2.5,
                }}
                onClick={onToggleSettingDialog}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: collapsed ? 0 : 2,
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      <SettingDialog open={settingDialog} onClose={onToggleSettingDialog} />
    </>
  );
};

export default SidebarMenus;
