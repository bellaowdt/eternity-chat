import { useTranslations } from 'next-intl';
import OnboardingHealing from '../components/OnboardingHealing';
import OnboardingReconnect from '../components/OnboardingReconnect';
import OnboardingConversations from '../components/OnboardingConversations';

export const useOnboardingSteps = () => {
  const t = useTranslations();
  return [
    {
      title: 'Reconnect Beyond Time',
      description:
        'Discover a compassionate way to relive memories and share heartfelt moments with your loved ones through advanced AI simulation.',
      component: <OnboardingReconnect />,
    },
    {
      title: 'AI-Driven Conversations',
      description:
        'Eternity Chat uses cutting-edge AI to simulate meaningful interactions. Recreate cherished memories and keep the bond alive.',
      component: <OnboardingConversations />,
    },

    {
      title: 'Designed for Healing',
      description:
        'Eternity Chat is crafted with care to support your emotional journey. Connect in a way that soothes and uplifts your spirit.',
      component: <OnboardingHealing />,
    },
  ];
};
