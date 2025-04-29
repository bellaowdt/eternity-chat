// types
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPrivileges } from "@/services/account";
import { IPrivilege } from "@/services/account/types";

export type GroupNames =
  | "Request"
  | "Catalog"
  | "User Management"
  | "User Admin"
  | "Request Admin";

const defaultValue = {};

const initialState: {
  value: Partial<Record<GroupNames, Record<string, boolean>>>;
} = { value: defaultValue };

function convertPrivilegesToNestedObject(
  privileges: IPrivilege[]
): Record<string, Record<string, boolean>> {
  return privileges.reduce<Record<string, Record<string, boolean>>>(
    (acc, privilege) => {
      const { group, name } = privilege;

      if (!acc[group]) {
        acc[group] = {};
      }

      acc[group][name] = true;

      return acc;
    },
    {}
  );
}

export const fetchPrivileges = createAsyncThunk("fetchPrivileges", async () => {
  const privileges = await getPrivileges();
  const value = convertPrivilegesToNestedObject(privileges.data.data);
  return value;
});

const privileges = createSlice({
  name: "privileges",
  initialState,
  reducers: {
    clearPrivileges(state) {
      state.value = defaultValue;
    },
  },
  extraReducers: {
    [fetchPrivileges.fulfilled.type]: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export default privileges.reducer;

export const { clearPrivileges } = privileges.actions;
