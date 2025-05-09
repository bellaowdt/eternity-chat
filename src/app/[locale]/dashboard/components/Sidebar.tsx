import Logo from '@/components/common/Logo';
import { DRAWER_MIN_WIDTH, DRAWER_WIDTH } from '@/constants/general';
import { DEFAULT_HOME_PAGE_PATH } from '@/constants/routes';
import { Notifications } from '@mui/icons-material';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
// import Account from './accout/Account';

const drawerWidth = DRAWER_WIDTH;
const miniWidth = DRAWER_MIN_WIDTH;

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: FC<SidebarProps> = ({ collapsed }) => {
  const t = useTranslations();
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
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? miniWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? miniWidth : drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
          borderRight: 'none',
          boxShadow: 'none',
          bgcolor: (theme) => theme.palette.background.paper,
        },
      }}
    >
      <Box sx={{}}>
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          my={3}
          px={3}
        >
          <Link href={DEFAULT_HOME_PAGE_PATH}>
            <Logo />
          </Link>
          <Typography variant="subtitle1" color="text.primary">
            {t('siteInfo.title')}
          </Typography>
        </Box>
        <List>
          {menus.map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
            </ListItem>
          ))}
        </List>
        {/* <Account /> */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
