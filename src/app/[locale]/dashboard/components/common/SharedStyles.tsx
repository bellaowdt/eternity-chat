import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const sharedTextFieldProps = {
  slotProps: {
    input: {
      startAdornment: <EditOutlinedIcon sx={{ color: 'grey.600' }} />,
    },
  },
  sx: {
    direction: 'rtl',
    '& .MuiInputBase-root::before': {
      borderBottom: '1 !important',
    },
  },
};
