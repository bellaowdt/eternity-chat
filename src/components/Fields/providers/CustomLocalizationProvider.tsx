import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import React from 'react';
import { useSelector } from 'src/store';

export interface CustomLocalizationProviderProps {
  children: React.ReactNode;
}
const CustomLocalizationProvider = ({ children }) => {
  const i18n = useSelector(state => state.config.i18n);

  const adapter = {
    'fa-IR': AdapterDateFnsJalali as any,
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
