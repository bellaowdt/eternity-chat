import { ToneEnum } from '@/services/common/types';
import { green, yellow } from '@mui/material/colors';
import { useTranslations } from 'next-intl';

const useToneList = () => {
  const t = useTranslations();
  const mapper: Record<
    ToneEnum,
    {
      title: string;
      bg: string;
      text: string;
    }
  > = {
    [ToneEnum.Happy]: {
      title: t('common.fields.tons.happy'),
      bg: green[100],
      text: green[900],
    },
    [ToneEnum.Natural]: {
      title: t('common.fields.tons.natural'),
      bg: yellow[100],
      text: yellow[900],
    },
    [ToneEnum.Sad]: {
      title: t('common.fields.tons.sad'),
      bg: yellow[100],
      text: yellow[900],
    },
  };

  return mapper;
};

export default useToneList;
