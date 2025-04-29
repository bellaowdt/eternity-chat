import axios from "../../lib/axios";
import {
  GetGoogleOAuthService,
  GetGoogleOAuthTokenService,
  RemoveGoogleConnectionService,
  SetGoogleOAuthCodeService,
  SignInService,
  SignUpService,
} from "./types";

const BASE_URL = "/gw/v1/iam";

export const signIn: SignInService = ({ payload }) => {
  return axios.post(`${BASE_URL}/signin`, payload);
};

export const signup: SignUpService = ({ payload }) => {
  return axios.post(`${BASE_URL}/signup`, payload);
};

export const getGoogleOAuth: GetGoogleOAuthService = () => {
  return axios.get(`${BASE_URL}/google-oauth`);
};

export const setGoogleOAuthCode: SetGoogleOAuthCodeService = ({
  code,
  redirect_url,
}) => {
  return axios.post(
    `${BASE_URL}/google-oauth?code=${code}&redirect_url=${redirect_url}`
  );
};

export const removeGoogleConnection: RemoveGoogleConnectionService = () => {
  return axios.delete(`${BASE_URL}/google-oauth`);
};

export const getGoogleOAuthToken: GetGoogleOAuthTokenService = () => {
  return axios.get(`${BASE_URL}/google-oauth/token`);
};
