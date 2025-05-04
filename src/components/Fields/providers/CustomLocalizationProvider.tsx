import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';
import { useSelector } from '@/store';

export interface CustomLocalizationProviderProps {
  children: React.ReactNode;
}
const CustomLocalizationProvider = ({ children }) => {
  const i18n = useSelector((state) => state.config.i18n);

  const adapter = {
    'en-US': AdapterDateFns,
    'ar-OM': AdapterDateFns,
  };

  return (
    <LocalizationProvider dateAdapter={adapter[i18n]}>
      {children}
    </LocalizationProvider>
  );
};

export default CustomLocalizationProvider;
