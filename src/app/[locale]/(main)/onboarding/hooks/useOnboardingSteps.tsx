import { useTranslations } from 'next-intl';
import OnboardingHeading from '../components/OnboardingHeading';

export const useOnboardingSteps = () => {
  const t = useTranslations();
  return [
    {
      title: 'Reconnect Beyond Time',
      description:
        'Discover a compassionate way to relive memories and share heartfelt moments with your loved ones through advanced AI simulation.',
      component: <OnboardingHeading />,
    },
    {
      title: 'AI-Driven Conversations',
      description:
        'Eternity Chat uses cutting-edge AI to simulate meaningful interactions. Recreate cherished memories and keep the bond alive.',
      component: <OnboardingHeading />,
    },

    {
      title: 'Designed for Healing',
      description:
        'Eternity Chat is crafted with care to support your emotional journey. Connect in a way that soothes and uplifts your spirit.',
      component: <OnboardingHeading />,
    },
  ];
};
