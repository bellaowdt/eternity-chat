import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import AddPersonalityDialog from './AddPersonalityDialog';

const AddPersonalityButton = () => {
  const [addPersonalityDialog, setAddPersonalityDialog] = useState(false);

  const onToggleAddDialog = () => {
    setAddPersonalityDialog((prevState) => !prevState);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="100%"
        width={{ xs: 50, md: 60 }}
        height={{ xs: 50, md: 60 }}
        bgcolor="primary.main"
        sx={{ cursor: 'pointer' }}
        onClick={onToggleAddDialog}
      >
        <Typography fontSize={30} color="common.white">
          +
        </Typography>
      </Box>
      <AddPersonalityDialog
        open={addPersonalityDialog}
        onClose={onToggleAddDialog}
      />
    </>
  );
};

export default AddPersonalityButton;
