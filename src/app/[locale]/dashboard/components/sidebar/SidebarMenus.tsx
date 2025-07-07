import { DEFAULT_DASHBOARD_ICONS } from '@/constants/general';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import HelpCenterDialog from '../help-center/HelpCenterDialog';
import SettingDialog from '../setting/SettingDialog';

interface SidebarMenusProps {
  collapsed: boolean;
}

interface ISideBarMenu {
  text: string;
  icon: string;
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
      icon: `${DEFAULT_DASHBOARD_ICONS}/notification.png`,
    },
    {
      text: t('common.sidebar.menu.settings'),
      icon: `${DEFAULT_DASHBOARD_ICONS}/settings.png`,
      callFunc: onToggleSettingDialog,
    },
    {
      text: t('common.sidebar.menu.subscription'),
      icon: `${DEFAULT_DASHBOARD_ICONS}/credit-card.png`,
    },
    {
      text: t('common.sidebar.menu.helpCenter'),
      icon: `${DEFAULT_DASHBOARD_ICONS}/message-question-checkmark.png`,
      callFunc: onToggleHelpCenterDialog,
    },
    {
      text: t('common.sidebar.menu.privacyPolicy'),
      icon: `${DEFAULT_DASHBOARD_ICONS}/lock.png`,
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
                p: collapsed ? 1 : 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 0 : 2,
                  justifyContent: 'center',
                }}
              >
                <Image alt={text} src={icon} width={24} height={24} />
              </ListItemIcon>
              {!collapsed && (
                <Typography variant="subtitle1" fontWeight={700}>
                  {text}
                </Typography>
              )}
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
