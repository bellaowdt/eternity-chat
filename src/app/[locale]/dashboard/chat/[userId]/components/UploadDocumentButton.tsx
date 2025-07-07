import { Box } from '@mui/material';
import { useState } from 'react';
import { UploadFile } from '@mui/icons-material';
import UploadDocumentDialog from './UploadDocumentDialog';

const UploadDocumentButton = () => {
  const [uploadDocumentDialog, setUploadDocumentDialog] = useState(false);

  const onToggleUploadDialog = () => {
    setUploadDocumentDialog((prevState) => !prevState);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="100%"
        width={60}
        height={60}
        bgcolor="primary.main"
        sx={{ cursor: 'pointer' }}
        onClick={onToggleUploadDialog}
      >
        <UploadFile sx={{ color: 'white' }} />
      </Box>
      <UploadDocumentDialog
        open={uploadDocumentDialog}
        onClose={onToggleUploadDialog}
      />
    </>
  );
};

export default UploadDocumentButton;
