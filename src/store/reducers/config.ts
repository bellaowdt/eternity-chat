import { createSlice } from "@reduxjs/toolkit";
import { defaultLocale } from "@/configs/languages";
import { DefaultConfigProps } from "@/types/config";

const initialState: DefaultConfigProps = {
  i18n: defaultLocale,
  miniDrawer: false,
  container: false,
  mode: "light",
  presetColor: "theme7",
};

const config = createSlice({
  name: "chat",
  initialState,
  reducers: {
    onChangeLocalization(state, action) {
      state.i18n = action.payload;
    },

    onChangeContainer(state) {
      state.container = !state.container;
    },

    onChangeMode(state, action) {
      state.mode = action.payload;
    },

    onChangePresetColor(state, action) {
      state.presetColor = action.payload;
    },

    onChangeMiniDrawer(state, action) {
      state.miniDrawer = action.payload;
    },
  },
});

export const {
  onChangeContainer,
  onChangeLocalization,
  onChangeMiniDrawer,
  onChangeMode,
  onChangePresetColor,
} = config.actions;

export default config.reducer;
