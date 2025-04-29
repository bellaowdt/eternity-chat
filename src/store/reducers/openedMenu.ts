import { createSlice } from '@reduxjs/toolkit';
import { MenuProps } from 'src/types/menu';

const initialState: Pick<MenuProps, 'openItem'> = {
  openItem: [],
};

const openedMenu = createSlice({
  name: 'openedMenu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },
  },
});

export default openedMenu.reducer;

export const { activeItem } = openedMenu.actions;
