import { Basic, Response } from '../types/common';

export interface IPremimunPlanPay {
  cardholderName: string;
  cardNumber: string;
  cvv: string;
  expirationDate: string;
  address: string;
  country: string;
  province: string;
  city: string;
  postalCode: string;
}

export interface PermiumPlanRegisterService {
  (args: { payload: IPremimunPlanPay }): Response<Basic>;
}
