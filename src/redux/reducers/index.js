import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import trx from './trx';
import chat from './chat';

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
  // user: persistReducer(persistUser, user),
  trx,
  chat,
});

export default rootReducer;
