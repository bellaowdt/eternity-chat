import GeneralSetting from '../components/GeneralSetting';
import NotificationPreference from '../components/NotificationPreference';
import ProfileForm from '../components/ProfileForm';

export const useEditInfoMenus = () => {
  // Submenu items under "Account Settings"
  const accountSettingsMenus = [
    {
      label: 'General Information',
      component: <ProfileForm />,
    },
    {
      label: 'Appearance',
      component: <GeneralSetting />,
    },
    {
      label: 'Notification Preference',
      component: <NotificationPreference />,
    },
    {
      label: 'Memories',
      component: <NotificationPreference />,
    },
  ];

  const standaloneItems = [
    {
      label: 'Speech',
      component: <div>Speech Editor</div>,
    },
    {
      label: 'Activity',
      component: <div>Activity Editor</div>,
    },
  ];

  return {
    accountSettingsMenus,
    standaloneItems,
  };
};
