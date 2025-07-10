import SizedButton from '@/components/common/SizedButton';
import { FIXED_BUTTON_WIDTH_IN_MODALS_DASHBOARD } from '@/constants/general';
import { useTranslations } from 'next-intl';
import React from 'react';

const SaveButton = () => {
  const t = useTranslations();
  return (
    <SizedButton
      variant="contained"
      size="large"
      sx={{
        fontWeight: '700',
        width: FIXED_BUTTON_WIDTH_IN_MODALS_DASHBOARD,
      }}
    >
      {t('common.buttons.saveChanges')}
    </SizedButton>
  );
};

export default SaveButton;
