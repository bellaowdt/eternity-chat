import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import {
  Alert,
  Avatar,
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useFileUpload } from './useFileUpload';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    gap: '0 2rem',
    background: '#f0f0f0',
    borderRadius: '0.5rem',
    height: 150,
    overflow: 'auto',
    marginTop: '0.5rem',
  },
  item: {
    width: 'auto',
  },
});

interface FileUploadProps {
  onFileUpload?: (files: File[]) => void;
  accept?: any;
  maxSize?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  accept,
  maxSize,
}) => {
  const classes = useStyles();

  const {
    files,
    error,
    getRootProps,
    getInputProps,
    isDragActive,
    removeFile,
  } = useFileUpload({
    accept,
    maxSize,
    onFileUpload,
  });

  const renderFilePreview = (file: File) => {
    if (file.type.startsWith('image/')) {
      return (
        <Avatar
          src={URL.createObjectURL(file)}
          variant="square"
          sx={{ width: 56, height: 56 }}
        />
      );
    }
    return <UploadIcon />;
  };

  return (
    <>
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #0087F7',
          borderRadius: '5px',
          padding: '1rem',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#f0f0f0' : '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <input {...getInputProps()} />
        <CloudUploadIcon sx={{ fontSize: 50, color: '#0087F7' }} />
        <Typography variant="h6" gutterBottom>
          Drag & drop files here, or click to select files
        </Typography>
        <Button
          variant="contained"
          startIcon={<UploadIcon sx={{ margin: 0.5 }} />}
        >
          Upload Files
        </Button>
      </Box>

      {files.length > 0 && (
        <Box sx={{ bgcolor: 'background.paper' }}>
          <div className={classes.container}>
            {files.map((file, index) => (
              <ListItem
                key={index}
                className={classes.item}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeFile(file)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar sx={{ p: 0.5 }}>
                  {renderFilePreview(file)}
                </ListItemAvatar>
                <ListItemText
                  primary={file.name}
                  secondary={`${(file.size / 1024).toFixed(2)} KB`}
                />
              </ListItem>
            ))}
          </div>
        </Box>
      )}
      {error && (
        <Alert sx={{ my: 1 }} severity="error" variant="filled">
          {error}
        </Alert>
      )}
    </>
  );
};

export default FileUpload;
