import { CircularProgress, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "@/store";
import { fetchPermissions } from "@/store/reducers/permissions";
import { fetchOrganizations } from "@/store/reducers/user";
import { GuardProps } from "@/types/auth";

const AuthGuard = ({ children }: GuardProps) => {
  const dispatch = useDispatch();

  const permissions = useSelector((state) => state.permissions.value);

  useEffect(() => {
    dispatch(fetchPermissions());
    dispatch(fetchOrganizations());
  }, [dispatch]);

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
