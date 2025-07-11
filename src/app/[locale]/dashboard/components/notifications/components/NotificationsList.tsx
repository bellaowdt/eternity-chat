import { Box } from '@mui/material';
import { useLocale } from 'next-intl';
import { LAYOUT_BACKGROUND_BLUE, STEPPER_COLOR } from '@/constants/general';
import { Typography, List, ListItem, Badge } from '@mui/material';
import { useNotifications } from '../hooks/useNotifications';
import RoundedIcon from '@/components/common/RoundedIcon';
import Image from 'next/image';

const NotificationsList = () => {
  const notifications = useNotifications();
  const locale = useLocale();

  return (
    <List>
      {notifications.map((notif, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: notif.unread ? LAYOUT_BACKGROUND_BLUE : 'transparent',
            mb: 1,
            py: 2.5,
          }}
        >
          <ListItem
            sx={{
              px: 3.5,
            }}
          >
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <RoundedIcon
                  width={35}
                  height={35}
                  sxProp={{
                    backgroundColor: notif.unread ? 'white' : '#E6E7E9',
                  }}
                  icon={
                    <Image
                      alt={notif.title}
                      width={21}
                      height={21}
                      src={notif.icon}
                    />
                  }
                />

                <Typography
                  variant="subtitle1"
                  fontWeight={notif.unread ? '600' : '400'}
                  className={`latoStyleRegular-${locale}`}
                >
                  {notif.title}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                {notif.time}
                <Typography
                  variant="caption"
                  color={STEPPER_COLOR}
                  className={`latoStyleRegular-${locale}`}
                ></Typography>

                {notif.unread && (
                  <Typography fontWeight={notif.unread ? 'bold' : 'normal'}>
                    <Badge color="secondary" variant="dot"></Badge>
                  </Typography>
                )}
              </Box>
            </Box>
          </ListItem>
        </Box>
      ))}
    </List>
  );
};

export default NotificationsList;
