// types
import { createSlice } from '@reduxjs/toolkit';
import { MenuProps } from 'src/types/menu';

// initial state
const initialState: Omit<MenuProps, 'openItem'> = {
  openComponent: 'buttons',
  drawerOpen: true,
  componentDrawerOpen: true,
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  },
});

export default menu.reducer;

export const { activeComponent, openDrawer, openComponentDrawer } =
  menu.actions;
