import { useTranslations } from 'next-intl';
import GeneralSetting from '../components/GeneralSetting';
import NotificationPreference from '../components/NotificationPreference';
import PrivacySettings from '../components/PrivacySettings';
import ProfileForm from '../components/ProfileForm';

export const useSettingMenus = () => {
  const t = useTranslations();

  return [
    {
      label: t('pages.settings.menu.accountSetting'),
      component: <ProfileForm />,
    },
    {
      label: t('pages.settings.menu.general'),
      component: <GeneralSetting />,
    },
    {
      label: t('pages.settings.menu.notificationPreference'),
      component: <NotificationPreference />,
    },
    {
      label: t('pages.settings.menu.privacySettings'),
      component: <PrivacySettings />,
    },
  ];
};
