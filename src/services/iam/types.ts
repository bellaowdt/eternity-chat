export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
}

export interface IAccountSetting {
  name: string;
  email: string;
  password: string;
}
