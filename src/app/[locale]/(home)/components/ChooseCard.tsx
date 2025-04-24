import { Box, Typography, Stack } from "@mui/material";
import { FC } from "react";

interface IChooseCard {
  card: {
    title: string;
    description: string;
  };
}

const ChooseCard: FC<IChooseCard> = ({ card }) => {
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" gap={2}>
      <Box
        width={100}
        height={100}
        borderRadius={2}
        bgcolor={(theme) => theme.palette.background.paper}
      ></Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack>
          <Typography variant="subtitle1" textAlign="center">
            {card.title}
          </Typography>
          <Typography variant="body2" textAlign="center" py={1}>
            {card.description}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ChooseCard;
