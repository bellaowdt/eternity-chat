import GeneralSetting from '../components/GeneralSetting';
import NotificationPreference from '../components/NotificationPreference';
import GeneralInformation from '../components/GeneralInformation';

export const useEditInfoMenus = () => {
  // Submenu items under "Account Settings"
  const accountSettingsMenus = [
    {
      label: 'General Information',
      component: <GeneralInformation />,
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
