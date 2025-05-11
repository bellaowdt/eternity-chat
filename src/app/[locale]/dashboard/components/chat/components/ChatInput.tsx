import { Box, IconButton, Typography, InputBase, Paper } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LinkIcon from '@mui/icons-material/Link';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { SendRounded } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const ChatInput = () => {
  const t = useTranslations();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight={180}
    >
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '40px',
          backgroundColor: '#e0e0e0',
          padding: '4px 16px',
          width: '100%',
        }}
      >
        <IconButton>
          <LinkIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Type a message..." />
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <Box
            sx={{
              backgroundColor: 'common.white',
              borderRadius: '50%',
              padding: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 1,
            }}
          >
            <SendRounded fontSize="small" />
          </Box>
        </IconButton>
        <IconButton>
          <GraphicEqIcon />
        </IconButton>
      </Paper>
      <Typography variant="body2" mt={2} color="text.secondary">
        {t('pages.chat.accuracyMsg')}
      </Typography>
    </Box>
  );
};

export default ChatInput;
