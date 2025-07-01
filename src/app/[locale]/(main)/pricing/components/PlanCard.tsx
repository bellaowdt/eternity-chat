'use client';

import {
  Button,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Stack,
} from '@mui/material';
import { FC } from 'react';
import { FeatureItem, plans } from './PaymentPlansData';

interface IPlanCard {
  planFormat: string;
  card: {
    price: string;
    duration: string;
    title: string;
    planType: string;
    subTilte: string;
    features?: FeatureItem[];
    moreDetails: string;
    buttonTilte: string;
  };
  onClick?: VoidFunction;
}

const PlanCard: FC<IPlanCard> = ({ card, planFormat, onClick }) => {
  const {
    price,
    title,
    planType,
    duration,
    subTilte,
    features,
    moreDetails,
    buttonTilte,
  } = card;
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Box minHeight={352}>
        <Typography fontSize="48px" fontWeight="700">
          {price}
          {duration && (
            <Typography
              variant="subtitle1"
              fontWeight="700"
              component="span"
              color="#8D8D8D"
            >
              {duration}
            </Typography>
          )}
        </Typography>

        <Typography variant="h3" mt={3} mb={1}>
          {title} {''}
          <Typography variant="subtitle1" fontWeight={700} component="span">
            {planType}
          </Typography>
        </Typography>

        <List>
          {features &&
            features?.map((feature, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {feature.icon}
                </ListItemIcon>
                <ListItemText
                  primary={feature.text}
                  slotProps={{
                    primary: {
                      variant: 'subtitle2',
                      fontWeight: 400,
                    },
                  }}
                />
              </ListItem>
            ))}
        </List>
      </Box>
      <Box flexGrow={1} display="flex" alignItems="center">
        <Button
          fullWidth
          variant={planFormat === plans[0] ? 'outlined' : 'contained'}
          size="large"
          onClick={() => onClick?.()}
          sx={{
            borderRadius: 10,
            fontWeight: 700,
            textTransform: 'none',
            color: planFormat === plans[0] ? '#000' : '#fff',
            borderColor:
              planFormat === plans[0]
                ? '#979DA5'
                : (theme) => theme.palette.primary.main,
            backgroundColor:
              planFormat === plans[0]
                ? '#fff'
                : (theme) => theme.palette.primary.main,
          }}
        >
          {buttonTilte}
        </Button>
      </Box>
    </Box>
  );
};

export default PlanCard;
