import { useTranslations } from 'next-intl';
import FaqList from '../components/FaqList';
import ContactSupport from '../components/ContactSupport';

export const useHelpCenterMenus = () => {
  const t = useTranslations();

  return [
    {
      label: t('pages.helpCenter.menu.faq'),
      component: <FaqList />,
    },
    {
      label: t('pages.helpCenter.menu.contactSupport'),
      component: <ContactSupport />,
    },
  ];
};
