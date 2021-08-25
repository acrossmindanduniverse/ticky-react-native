import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import trx from './trx';
import chat from './chat';
import globalReducer from './global';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistUser = {
  key: 'user',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  chat,
  user: persistReducer(persistUser, user),
  trx,
  globalReducer,
});

export default rootReducer;
