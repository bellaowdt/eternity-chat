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
} from '@mui/material';
import { FC } from 'react';
import { FeatureItem } from './PaymentPlansData';

interface IPlanCard {
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

const PlanCard: FC<IPlanCard> = ({ card, onClick }) => {
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
    <Card
      sx={{
        borderRadius: 1,
        padding: 3,
        mx: 'auto',
        backgroundColor: '#F2F2F2',
      }}
    >
      <CardContent>
        <Typography variant="h1" fontWeight="bold">
          {price}
          {duration && (
            <Typography variant="subtitle1" component="span" color="#8D8D8D">
              {duration}
            </Typography>
          )}
        </Typography>

        <Typography variant="h4" mt={3} mb={1}>
          {title}
          <Typography variant="subtitle1" component="span">
            {planType}
          </Typography>
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mb={2}>
          {subTilte}
        </Typography>

        <List dense>
          {features &&
            features?.map((feature, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {feature.icon}
                </ListItemIcon>
                <ListItemText primary={feature.text} />
              </ListItem>
            ))}
        </List>

        <Typography variant="button" color="text.secondary" mt={2}>
          {moreDetails}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={() => onClick?.()}
          sx={{
            mt: 3,
            borderRadius: 10,
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          {buttonTilte}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
