/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Typography } from '@mui/material';
import PlanCard from './components/PlanCard';

const PaymentPlans = () => {
  const planCards = [
    {
      price: '$0',
      duration: '',
      title: 'Free Trial - 7 Days',
      planType: '(Text Chat Only)',
      subTilte: 'Want a deeper connection? Unlock the full experience.',
      features: [
        {
          icon: '💬',
          text: 'Real-time text chat with your AI loved one',
        },
        {
          icon: '🚫',
          text: 'No credit card required',
        },
        {
          icon: '⏳',
          text: '7-day access',
        },
      ],
      moreDetails: "A gentle first step to see what it's like.",
      buttonTilte: 'Start Free Trial',
    },
    {
      price: '$50',
      duration: '/month',
      title: 'Premium',
      planType: '(Voice & More)',
      subTilte: 'Want a deeper connection? Unlock the full experience.',
      features: [
        {
          icon: '🎙️',
          text: 'Voice calls with your loved one’s AI',
        },
        {
          icon: '🧠',
          text: 'Advanced emotional recall + memory simulation',
        },
        {
          icon: '✍️',
          text: 'Custom tone and personality controls',
        },
        {
          icon: '🛠️',
          text: 'Priority customer support',
        },
        {
          icon: '✅',
          text: 'Everything included in Free Trial',
        },
      ],

      moreDetails: 'Feel the presence. Hear their voice. Stay connected.',
      buttonTilte: 'Upgrade to Premium',
    },
  ];

  return (
    <Box py={8}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }} p={3}>
          <Typography variant="h2">
            Choose how you <br />
            want to begin
          </Typography>
          <Typography variant="h6" mt={2}>
            You've just completed setup. Now it’s time to begin your journey.
          </Typography>
          <Typography variant="h6" py={2}>
            Whether you want to start gently with text conversations, or you're
            ready for a more immersive experience with voice and deeper memories
            — we have the right path for you.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <PlanCard card={planCards[0]} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <PlanCard card={planCards[1]} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentPlans;
