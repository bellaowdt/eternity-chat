import { Box, IconButton, Typography, InputBase, Paper } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LinkIcon from '@mui/icons-material/Link';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { SendRounded } from '@mui/icons-material';

const ChatInput = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '80%',
          borderRadius: '40px',
          backgroundColor: '#e0e0e0',
          padding: '4px 16px',
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
        The AI can’t fully replicate your loved one, but it uses their data to
        create meaningful conversations.
      </Typography>
    </Box>
  );
};

export default ChatInput;
