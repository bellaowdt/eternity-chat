import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/store';
import { fetchPermissions } from 'src/store/reducers/permissions';
import { fetchOrganizations } from 'src/store/reducers/user';
import { GuardProps } from 'src/types/auth';

const AuthGuard = ({ children }: GuardProps) => {
  const dispatch = useDispatch();

  const permissions = useSelector(state => state.permissions.value);

  useEffect(() => {
    dispatch(fetchPermissions());
    dispatch(fetchOrganizations());
  }, []);

  // Show loading before showing the app when permissions are not loaded
  if (Object.keys(permissions || {}).length === 0) {
    return (
      <Stack height="100vh" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Stack>
    );
  }

  return children;
};

export default AuthGuard;
