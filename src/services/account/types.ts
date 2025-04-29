import { Basic, Response } from "../types/common";

export interface RegisterPayload {
  mobileNumber: string;
  nationalCode: string;
}
export interface RegisterService {
  ({ payload }: { payload: RegisterPayload }): Response;
}
export interface RegisterVerifyPayload {
  mobileNumber: string;
  code: string;
  token: string;
}
export interface RegisterVerifyService {
  ({ payload }: { payload: RegisterVerifyPayload }): Response;
}
export interface SendLoginOtpPayload {
  userName: string;
}
export interface SendLoginOtpService {
  ({ payload }: { payload: SendLoginOtpPayload }): Response;
}
export interface LoginPayload {
  userName: string;
  password: string;
}
export interface LoginService {
  ({ payload }: { payload: LoginPayload }): Response<Basic<boolean>>;
}

export interface LogoutPayload {
  refreshToken: string;
}

export interface LogoutService {
  ({ payload }: { payload: LogoutPayload }): Response;
}

export interface RefreshTokenPayload {
  refreshToken: string;
}
export interface LoginByRefreshTokenService {
  ({ payload }: { payload: RefreshTokenPayload }): Response;
}

export interface IUserProfile {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: number;
  favoriteCategories: number[];
  entertainment: string;
  postalCode: string;
  provinceId: number;
  cityId: number;
  address: string;
  LastUpdate: number;
  credit: number;
}

export interface UpdateProfileService {
  (args: { payload: IUserProfile }): Response;
}

export interface GetProfileService {
  (): Response<IUserProfile>;
}

export interface IUserEducation {
  education: string;
  job: string;
  income: string;
}

export interface getUserDetailService {
  (args: { userId: number }): Response;
}

export interface IAccount {
  user_id: number;
  mobile: string;
  // verify_status: VerifyStatusEnum;
  // user_type: UserTypeEnum;
  // user_types: UserTypeEnum[];
  agreement: true;
  status: string;
  status_description: string;
  kyc_status: string[];
  kyc_desc: string;
  // contract_status: IContractStatus;
  // contract_statuses: IContractStatus[];
  referral_id: number;
  profile_file_id: number;
  privileges: {
    privilege_id: number;
  }[];
  //config: IUserConfig[];
  reference_chain: number[];
}

export interface GetAccountDetail {
  (): Response<Basic<IAccount>>;
}

export interface IPrivilege {
  application_privilege_id: number;
  name: string;
  type: number[];
  group: string;
  hasPrivilege?: boolean;
}

export interface GetPrivilegesService {
  (): Response<Basic<IPrivilege[]>>;
}
