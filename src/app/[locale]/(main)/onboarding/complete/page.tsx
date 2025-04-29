"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CompleteAboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      px={2}
      py={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        maxWidth="sm"
        width="100%"
        flexGrow={1}
        justifyContent="center"
        mb={4}
      >
        <Stack display="flex" alignItems="center">
          <Image
            src="/assets/images/loader.gif"
            alt=""
            width="180"
            height="180"
          />
          <Typography variant="h4" my={2}>
            You’re All Set
          </Typography>
          <Typography variant="body1" mb={2}>
            Thank you for sharing these cherished details.
            <br />
            We're setting everything up for you now.
          </Typography>
          <Typography variant="body2" mb={2}>
            This might take a few moments.
          </Typography>
        </Stack>

        <Box display="flex" alignItems="center" gap={3} mt={13}>
          <Button variant="contained">Notify when It’s Ready</Button>
          <Button variant="contained">Explore FAQs </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompleteAboard;
