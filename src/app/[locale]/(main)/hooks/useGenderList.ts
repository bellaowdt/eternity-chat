import {
  DEFAULt_FEMALE_AVATAR_IMAGE,
  DEFAULt_MALE_AVATAR_IMAGE,
} from '@/constants/general';
import { GenderEnum } from '@/services/common/types';
import { green, yellow } from '@mui/material/colors';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

const useGenderList = () => {
  const t = useTranslations();
  const mapper: Record<
    GenderEnum,
    {
      title: string;
      bg: string;
      text: string;
      icon: ReactNode;
    }
  > = {
    [GenderEnum.Female]: {
      title: t('common.fields.female'),
      bg: green[100],
      text: green[900],
      icon: DEFAULt_FEMALE_AVATAR_IMAGE,
    },
    [GenderEnum.Male]: {
      title: t('common.fields.male'),
      bg: yellow[100],
      text: yellow[900],
      icon: DEFAULt_MALE_AVATAR_IMAGE,
    },
  };

  return mapper;
};

export default useGenderList;
