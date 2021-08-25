import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import user from './user';
import destination from './destination';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  user,
  destination,
});

export default rootReducer;
