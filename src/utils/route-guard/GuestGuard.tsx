import { GuardProps } from 'src/types/auth';

const GuestGuard = ({ children }: GuardProps) => {
  return children;
};

export default GuestGuard;
