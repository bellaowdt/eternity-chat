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
import {
  DEFAULT_HELP_CENTER_PATH,
  DEFAULT_POLICY_PRIVACY_PATH,
} from '@/constants/routes';
import Link from 'next/link';
import SettingDialog from '../setting/SettingDialog';
import HelpCenterDialog from '../help-center/HelpCenterDialog';

interface SidebarMenusProps {
  collapsed: boolean;
}

interface ISideBarMenu {
  text: string;
  icon: React.ReactElement;
  callFunc?: VoidFunction;
  linkUrl?: string;
}

const SidebarMenus: FC<SidebarMenusProps> = ({ collapsed }) => {
  const t = useTranslations();
  const [settingDialog, setSettingDialog] = useState(false);
  const [helpCenterDialog, setHelpCenterDialog] = useState(false);

  const onToggleSettingDialog = () => {
    setSettingDialog((prevState) => !prevState);
  };

  const onToggleHelpCenterDialog = () => {
    setHelpCenterDialog((prevState) => !prevState);
  };

  const menus: ISideBarMenu[] = [
    {
      text: t('common.sidebar.menu.notification'),
      icon: <Notifications />,
    },
    {
      text: t('common.sidebar.menu.settings'),
      icon: <SettingsIcon />,
      callFunc: onToggleSettingDialog,
    },
    {
      text: t('common.sidebar.menu.helpCenter'),
      icon: <ContactSupportOutlinedIcon />,
      callFunc: onToggleHelpCenterDialog,
    },
    {
      text: t('common.sidebar.menu.privacyPolicy'),
      icon: <LockOutlinedIcon />,
    },
  ];

  return (
    <>
      <List>
        {menus?.map(({ text, icon, callFunc, linkUrl }, index) => {
          const buttonContent = (
            <ListItemButton
              onClick={callFunc}
              component={linkUrl ? Link : 'button'}
              href={linkUrl}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? 'center' : 'flex-start',
                px: collapsed ? 1 : 2.5,
              }}
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
          );

          return (
            <div key={text}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                {buttonContent}
              </ListItem>
              {index < menus.length - 1 && <Divider />}
            </div>
          );
        })}
      </List>
      <SettingDialog open={settingDialog} onClose={onToggleSettingDialog} />
      <HelpCenterDialog
        open={helpCenterDialog}
        onClose={onToggleHelpCenterDialog}
      />
    </>
  );
};

export default SidebarMenus;
