export type PlanType = 'free' | 'premium';

export interface FeatureItem {
  icon: string;
  text: string;
}

export const plans: PlanType[] = ['free', 'premium'];

export const planFeatures: Record<PlanType, FeatureItem[]> = {
  free: [
    { icon: '💬', text: 'pages.paymentPlans.plans.free.features.f1' },
    { icon: '🚫', text: 'pages.paymentPlans.plans.free.features.f2' },
    { icon: '⏳', text: 'pages.paymentPlans.plans.free.features.f3' },
  ],
  premium: [
    {
      icon: '🎙️',
      text: 'pages.paymentPlans.plans.premium.features.f1',
    },
    {
      icon: '🧠',
      text: 'pages.paymentPlans.plans.premium.features.f2',
    },
    {
      icon: '✍️',
      text: 'pages.paymentPlans.plans.premium.features.f3',
    },
    {
      icon: '🛠️',
      text: 'pages.paymentPlans.plans.premium.features.f4',
    },
    {
      icon: '✅',
      text: 'pages.paymentPlans.plans.premium.features.f5',
    },
  ],
};
