'use client';

import React from 'react';
import useListDocuments from '../components/documents/hooks/useListDocuments';
import {
  SAMPLE_CHAT_USER_ID,
  SAMPLE_CHAT_USER_PERSONALITY,
} from '@/constants/query-keys';

const TestPage = () => {
  const { data } = useListDocuments({
    user_id: SAMPLE_CHAT_USER_ID,
    personality_name: SAMPLE_CHAT_USER_PERSONALITY.toLowerCase(),
  });
  console.log(data?.documents);
  return <></>;
};

export default TestPage;
