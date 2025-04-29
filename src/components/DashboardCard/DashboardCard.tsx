import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC, ReactNode } from 'react';

export interface DashboardCardProps {
  children?: ReactNode;
  title?: string;
}
const DashboardCard: FC<DashboardCardProps> = ({ title, children }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        overflow: 'auto',
      }}
    >
      <CardContent>
        {title && (
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 2,
            }}
          >
            {title}
          </Typography>
        )}

        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
