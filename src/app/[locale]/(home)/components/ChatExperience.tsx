"use client";

import { Grid, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Image from "@/components/common/Image";
import { HOME_CHAT_EXPERIENCE } from "@/constants/general";
import { CustomButton } from "@/components/common/CustomStyle";

const ChatExperience = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      py={16}
    >
      <Grid container>
        <Grid size={{ xs: 12, sm: 4 }} p={2}>
          <Stack my={2} spacing={2}>
            <Typography variant="h5">Eternity</Typography>
            <Typography variant="body1">
              Try a demo conversation with a fictional character to see how it
              works.
            </Typography>
          </Stack>
          <CustomButton variant="contained" color="primary">
            Start Demo
          </CustomButton>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Image src={HOME_CHAT_EXPERIENCE} alt="" width={500} height={500} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatExperience;
