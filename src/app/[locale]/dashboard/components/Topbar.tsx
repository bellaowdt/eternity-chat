import { IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';

interface TopbarProps {
  toggleCollapsed: VoidFunction;
  collapsed: boolean;
}

const Topbar: FC<TopbarProps> = ({ collapsed, toggleCollapsed }) => {
  const iconBackColorOpen = 'grey.200';
  const iconBackColor = 'grey.100';

  return (
    <Toolbar sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
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
  );
};

export default Topbar;
