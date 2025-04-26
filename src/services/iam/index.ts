import axios from '../../lib/axios';
import {
  AcceptInvitationService,
  CodeService,
  FacebookSigningService,
  GetFacebookUrlService,
  GetGoogleOAuthService,
  GetGoogleOAuthTokenService,
  GetLanguagesService,
  GetPermissionsService,
  GetProfileService,
  GetUserService,
  InviteService,
  MyInvitationsService,
  RejectInvitationService,
  RemoveGoogleConnectionService,
  ResetPasswordService,
  SendForgotCodeService,
  SetGoogleOAuthCodeService,
  SignInService,
  SignUpService,
  UpdateProfileService,
} from './types';

const BASE_URL = '/gw/v1/iam';

export const signIn: SignInService = ({ payload }) => {
  return axios.post(`${BASE_URL}/signin`, payload);
};

export const signup: SignUpService = ({ payload }) => {
  return axios.post(`${BASE_URL}/signup`, payload);
};

export const sendCode: CodeService = ({ payload }) => {
  return axios.post(`${BASE_URL}/code`, payload);
};

export const sendForgotCode: SendForgotCodeService = ({ payload }) => {
  return axios.post(`${BASE_URL}/send-forget-code`, payload);
};

export const resetPassword: ResetPasswordService = ({ payload }) => {
  return axios.post(`${BASE_URL}/reset-password`, payload);
};

export const getPermissions: GetPermissionsService = () => {
  return axios.get(`${BASE_URL}/permission/`);
};

export const getProfile: GetProfileService = () => {
  return axios.get(`${BASE_URL}/profile`);
};

export const updateProfile: UpdateProfileService = ({ payload }) => {
  return axios.put(`${BASE_URL}/profile`, payload);
};

export const invite: InviteService = ({ payload }) => {
  return axios.post(`${BASE_URL}/invite`, payload);
};

export const myInvitations: MyInvitationsService = () => {
  return axios.get(`${BASE_URL}/my-invitations`);
};

export const acceptInvitation: AcceptInvitationService = ({ tenantId }) => {
  return axios.put(`${BASE_URL}/accept-invitation/${tenantId}`);
};

export const rejectInvitation: RejectInvitationService = ({ tenantId }) => {
  return axios.put(`${BASE_URL}/reject-invitation/${tenantId}`);
};

export const getUser: GetUserService = ({ id, params }) => {
  return axios.get(`${BASE_URL}/users/${id}`, { params });
};

export const getGoogleOAuth: GetGoogleOAuthService = () => {
  return axios.get(`${BASE_URL}/google-oauth`);
};

export const setGoogleOAuthCode: SetGoogleOAuthCodeService = ({
  code,
  redirect_url,
}) => {
  return axios.post(
    `${BASE_URL}/google-oauth?code=${code}&redirect_url=${redirect_url}`,
  );
};

export const removeGoogleConnection: RemoveGoogleConnectionService = () => {
  return axios.delete(`${BASE_URL}/google-oauth`);
};

export const getGoogleOAuthToken: GetGoogleOAuthTokenService = () => {
  return axios.get(`${BASE_URL}/google-oauth/token`);
};

export const getLanguages: GetLanguagesService = () => {
  return axios.get(`${BASE_URL}/langs`);
};

export const getFacebookUrl: GetFacebookUrlService = () => {
  return axios.get(`${BASE_URL}/facebook-url`);
};

export const facebookSigning: FacebookSigningService = ({ payload }) => {
  return axios.post(`${BASE_URL}/facebook-signing`, payload);
};
