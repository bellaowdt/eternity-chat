import axios from '../../lib/axios';
import {
  GetAccountDetail,
  GetProfileService,
  LoginByRefreshTokenService,
  LoginService,
  LogoutService,
  RegisterService,
  RegisterVerifyService,
  SendLoginOtpService,
} from './types';

const BASE_URL = '/api/v1/account';

export const register: RegisterService = ({ payload }) => {
  return axios.post(`${BASE_URL}/register`, payload);
};

export const registerVerify: RegisterVerifyService = ({ payload }) => {
  return axios.post(`${BASE_URL}/registerVerify`, payload);
};

export const loginByOtp: LoginService = ({ payload }) => {
  return axios.post(`${BASE_URL}/loginOtp`, payload);
};

export const sendLoginOtp: SendLoginOtpService = ({ payload }) => {
  return axios.post(`${BASE_URL}/sendOtp`, payload);
};

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
