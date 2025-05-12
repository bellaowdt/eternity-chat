import axios from '../../lib/axios';
import {
  GetAccountDetail,
  GetProfileService,
  LoginByRefreshTokenService,
  LogoutService,
} from './types';

const BASE_URL = '/api/v1/account';

export const loginByRefreshToken: LoginByRefreshTokenService = ({
  payload,
}) => {
  return axios.post(`${BASE_URL}/loginByRefreshToken`, payload);
};

export const logout: LogoutService = ({ payload }) => {
  return axios.post(`${BASE_URL}/logout`, payload);
};

export const getProfile: GetProfileService = () => {
  return axios.get(`${BASE_URL}/getProfile`);
};

export const getAccountDetail: GetAccountDetail = () => {
  return axios.post(`${BASE_URL}/detail`);
};
