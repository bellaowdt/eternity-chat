// material-ui
import {
  CircularProgress,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// assets
import { LogoutOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface Props {
  handleLogout: () => void;
  isPending: boolean;
}

const ProfileTab = ({ handleLogout, isPending }: Props) => {
  const { t } = useTranslation();
  return (
    <List
      component="nav"
      sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}
    >
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          {isPending ? <CircularProgress size={18} /> : <LogoutOutlined />}
        </ListItemIcon>

        <ListItemText primary={t('common:buttons.logout')} />
      </ListItemButton>
    </List>
  );
};

export default ProfileTab;
