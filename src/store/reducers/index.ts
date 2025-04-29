import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import config from './config';
import menu from './menu';
import privileges from './privileges';
import snackbar from './snackbar';
import openedMenu from './openedMenu';

const reducers = combineReducers({
  privileges,
  config: persistReducer(
    {
      key: 'config',
      storage,
    },
    config,
  ),
  menu: persistReducer(
    {
      key: 'menu',
      storage,
    },
    menu,
  ),
  openedMenu,
  snackbar,
});

export default reducers;
