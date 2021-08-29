import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import user from './user';
import destination from './destination';
import search from './search';
import transaction from './transaction';
import product from './product';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  user,
  destination,
  search,
  transaction,
  product,
});

// export default rootReducer;
// import search from './search';

// const reducer = combineReducers({
//   search,
// });

// export default reducer;

export default rootReducer;
