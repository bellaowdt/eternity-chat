import axios from '../../lib/axios';
import { SignInService, SignUpService } from './types';

const BASE_URL = '/v1/iam';

export const signIn: SignInService = ({ payload }) => {
  return axios.post(`${BASE_URL}/signin`, payload);
};

export const signup: SignUpService = ({ payload }) => {
  return axios.post(`${BASE_URL}/signup`, payload);
};
