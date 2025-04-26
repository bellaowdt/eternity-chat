import axios from '../../lib/axios';
import { GetCountryCodeListService } from './types';

export const BASE_URL = '/api/v1/common';

export const getCountryCodeList: GetCountryCodeListService = () => {
  return axios.get(`${BASE_URL}/getCountryCodeList`);
};
