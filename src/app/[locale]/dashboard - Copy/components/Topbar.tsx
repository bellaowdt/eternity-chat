import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';

interface TopbarProps {
  toggleCollapsed: VoidFunction;
}

const Topbar: FC<TopbarProps> = ({ toggleCollapsed }) => (
  <AppBar
    position="fixed"
    sx={{
      width: '100%',
      bgcolor: '#ebebeb', //TODO
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    elevation={0}
  >
    <Toolbar>
      <IconButton edge="start" onClick={toggleCollapsed} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="common.black">
        Eternity Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Topbar;
