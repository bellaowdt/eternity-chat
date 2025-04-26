export enum SortOrientationEnum {
  Descending = 1,
  Ascending = 2,
}

export enum StepEnum {
  Start = 1,
  GetName = 2,
  GetCompanyName = 3,
  GetNumber = 4,
  GetLocation = 5,
  GetBrands = 6,
  GetCategories = 7,
  FinalRegistering = 8,
}

export enum UserTypeEnum {
  Customer = 1,
  Supplier = 2,
  SuperAdmin = 3,
  Admin = 4,
  Service = 5,
  Support = 6,
}

export enum ContractStatusEnum {
  New = 1,
  Approved = 2,
  Rejected = 3,
  Expired = 4,
  Blocked = 5,
}

export enum UserSTatusEnum {
  Registering = 1,
  PendingConfirmation = 2,
  InReview = 3,
  KycError = 4,
  Confirmed = 5,
  Rejected = 6,
  Blocked = 7,
}

export enum KYCStatusEnum {
  PersonalInfoConfirmed = 1,
  CompanyInfoConfirmed = 2,
  BankAccountInfoConfirmed = 3,
  ContactInfoConfirmed = 4,
  NationalCardConfirmed = 5,
  IdentityCardConfirmed = 6,
  VatDocumentConfirmed = 7,
  NewsPaperDocumentConfirmed = 8,
}

export enum RegisterMediumEnum {
  Wati = 1,
  Manual = 2,
  Panel = 3,
  Respond = 4,
}

export enum VerifyStatusEnum {
  UnVerify = 0,
  Pending = 1,
  Failed = 2,
  Verified = 3,
}

export enum UserConfigTypeEnum {
  FirstApprove = 1,
  Culture = 2,
  FirstLogin = 3,
  TimeZone = 4,
}

export enum FormApprovalEnum {
  ShowDetails = 1,
  RejectComment = 2,
}

export interface IUserConfig {
  user_id: number;
  type: UserConfigTypeEnum;
  value: string;
  create_date: string;
  last_modify_date: string;
  is_enabled: boolean;
}

export enum GenderEnum {
  Female = 1,
  Male = 2,
  Unknown = 3,
}

export enum BooleanEnum {
  False = 0,
  True = 1,
}

export enum MediaTypeEnum {
  Image = 1,
  Video = 2,
  Audio = 3,
  Document = 4,
  Excel = 5,
}

export enum FileTypeEnum {
  NationalCard = 1,
  BirthCertificate = 2,
  VatDocument = 3,
  NewsPaperDocument = 4,
  PaperContract = 5,
  BannerImage = 6,
  UserProfile = 7,
  Bill = 8,
  Report = 9,
}

export enum CurrencyEnum {
  Rial = 1,
  Toman = 2,
  Dollar = 3,
  Euro = 4,
}
