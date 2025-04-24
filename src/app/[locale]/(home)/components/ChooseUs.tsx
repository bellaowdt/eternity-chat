"use client";

import { Box, Grid, Typography } from "@mui/material";
import ChooseCard from "./ChooseCard";

const chooseUsList = [
  {
    title: "AI-Powered Conversations",
    description:
      "Simulated conversations that feel real, using data you provide",
  },
  {
    title: "Privacy First",
    description: "Your data is securely encrypted and always in your control",
  },
  {
    title: "Customizable Interactions",
    description: "Adjust tone and sensitivity to suit your preferences",
  },
  {
    title: "Compassionate Design",
    description: "Crafted to support emotional well-being and healing",
  },
];

const ChooseUs = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" py={1}>
          Why Choose Eternity Chat?
        </Typography>
        <Typography variant="body1">
          Try a demo conversation with a fictional character
        </Typography>
        <Typography> to see how it works.</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        py={8}
      >
        <Grid container>
          {chooseUsList.map((cardItem) => (
            <Grid key={cardItem.title} size={{ xs: 12, sm: 3 }}>
              <ChooseCard card={cardItem} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ChooseUs;
