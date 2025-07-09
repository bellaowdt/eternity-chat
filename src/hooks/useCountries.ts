import { Option } from '@/components/Fields';
import { useMemo } from 'react';

type Country = {
  code: string;
  name: string;
};

const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'IN', name: 'India' },
];

export function useCountries() {
  const countries = useMemo(() => COUNTRIES, []);

  return countries.map((item) => {
    return {
      id: item.code,
      label: item.name,
      value: item.code,
    } as Option;
  });
}
