import axios from '../../lib/axios';
import {
  GeneralInformationUpdateService
} from './types';

const BASE_URL = '/api/v1/onboarding';

export const generalInformationUpdate: GeneralInformationUpdateService = ({ payload }) => {
  return axios.post(`${BASE_URL}/register`, payload);
};

