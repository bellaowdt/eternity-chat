import { useTranslations } from 'next-intl';
import ProfileForm from '../../setting/components/ProfileForm';
import GeneralSetting from '../../setting/components/GeneralSetting';
import NotificationPreference from '../../setting/components/NotificationPreference';
import PrivacySettings from '../../setting/components/PrivacySettings';

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
