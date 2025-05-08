import { useMemo } from 'react';
import { languages } from '@/navigation';
import { Option } from '@/components/Fields';

export const useLanguages = () => {
  const langs: Option[] = useMemo(() => {
    return Object.entries(languages).map(([code, value]) => ({
      id: code,
      label: value.label,
      value: value.label,
    }));
  }, []);

  return langs;
};
