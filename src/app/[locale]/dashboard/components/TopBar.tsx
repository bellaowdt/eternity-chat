import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton, Toolbar } from '@mui/material';
import { FC } from 'react';
import AppBarComponent from './AppBarComponent';
import NotificationBar from './NotificationBar';

interface TopBarProps {
  toggleCollapsed: VoidFunction;
  collapsed: boolean;
}

const TopBar: FC<TopBarProps> = ({ collapsed, toggleCollapsed }) => {
  const iconBackColorOpen = 'grey.200';
  const iconBackColor = 'grey.100';

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        sx={{ bgcolor: (theme) => theme.palette.background.paper }}
      >
        <Toolbar>
          <IconButton
            onClick={toggleCollapsed}
            edge="start"
            color="secondary"
            sx={{
              color: 'text.primary',
              borderRadius: 0.2,
              bgcolor: collapsed ? iconBackColorOpen : iconBackColor,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box flex={1}>
          <Container maxWidth="md">
            <AppBarComponent />
          </Container>
          <NotificationBar />
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
