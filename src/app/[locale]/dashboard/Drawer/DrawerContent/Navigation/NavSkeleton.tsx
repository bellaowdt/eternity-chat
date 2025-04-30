import { useSelector } from 'react-redux';
import { ListItemIcon, ListItemText, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ListItem } from '@mui/material';
import { RootStateProps } from 'src/types/root';

const NavSkeleton = () => {
  const level = 1;
  const theme = useTheme();
  const menu = useSelector((state: RootStateProps) => state.menu);
  const { drawerOpen } = menu;

  return (
    <ListItem
      sx={{
        gap: 1,
        zIndex: 1201,
        pl: 1.5,
        py: 1.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 28,
          ...(!drawerOpen && {
            borderRadius: 1.5,
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              bgcolor:
                theme.palette.mode === 'dark'
                  ? 'secondary.light'
                  : 'secondary.lighter',
            },
          }),
        }}
      >
        <Skeleton variant="circular" width={28} height={28} />
      </ListItemIcon>

      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText primary={<Skeleton variant="text" width="100%" />} />
      )}
    </ListItem>
  );
};

export default NavSkeleton;
