import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Divider, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const ContactSupport = () => {
  const t = useTranslations();
  const items = [
    {
      label: t('pages.helpCenter.menu.contactSupport.liveChat'),
      url: '',
    },
    {
      label: t('pages.helpCenter.menu.contactSupport.sendEmail'),
      url: '',
    },
    {
      label: t('pages.helpCenter.menu.contactSupport.requestCallback'),
      url: '',
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <>
          <Box
            key={item.label}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Typography>{item.label}</Typography>
            <ChevronRightIcon fontSize="small" />
          </Box>
          {index !== items.length - 1 && <Divider />}
        </>
      ))}
    </>
  );
};

export default ContactSupport;
