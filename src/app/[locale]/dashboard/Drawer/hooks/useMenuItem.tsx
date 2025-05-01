import { NavItemType } from '@/types/menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTranslations } from 'next-intl';

const useMenuItem = (): NavItemType => {
  const t = useTranslations();
  const children: NavItemType['children'] = [];

  children.push({
    id: 'admin-dashboard-menu',
    type: 'item',
    title: t('pages:menu.dashboard'),
    icon: <DashboardIcon />,
    url: '/',
    breadcrumbs: false,
  });

  return {
    id: 'group-server-menu',
    type: 'group',
    children,
  };
};

export default useMenuItem;
