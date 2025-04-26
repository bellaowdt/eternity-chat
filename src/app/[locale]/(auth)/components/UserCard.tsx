import { CloseOutlined } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

const UserCard = ({ avatar, name, role, email, status, onDelete }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar src={avatar} />

            <Stack>
              {name && <Typography variant="h6">{name}</Typography>}

              <Typography variant="caption" color="secondary">
                {role} - {email}
              </Typography>
            </Stack>
          </Stack>

          <Chip label={status} size="small" color="success" variant="light" />

          {!!onDelete && (
            <IconButton
              color="error"
              size="small"
              onClick={() => onDelete(email)}
            >
              <CloseOutlined />
            </IconButton>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCard;
