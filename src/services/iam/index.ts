import axios from '../../lib/axios';

const BASE_URL = '/v1/iam';

export const signIn = ({ payload }) => {
  return axios.post(`${BASE_URL}/signin`, payload);
};

export const signup = ({ payload }) => {
  return axios.post(`${BASE_URL}/signup`, payload);
};
