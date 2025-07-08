import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton, Toolbar } from '@mui/material';
import { FC } from 'react';
import AppBarComponent from './AppBarComponent';

interface TopBarProps {
  toggleCollapsed: VoidFunction;
  collapsed: boolean;
}

const TopBar: FC<TopBarProps> = ({ collapsed, toggleCollapsed }) => {
  const iconBackColorOpen = 'grey.200';
  const iconBackColor = 'grey.100';

  return (
    <>
      <Box sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
        <Box display="flex" alignItems="center">
          <Toolbar>
            <IconButton
              onClick={toggleCollapsed}
              edge="start"
              sx={{
                color: 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Container
            maxWidth="lg"
            sx={{ flex: 1, px: { xs: 2, sm: 4, md: 6 } }}
          >
            <AppBarComponent />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
