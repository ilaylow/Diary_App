import {combinedReducers} from 'redux';

import auth from './auth';

export const reducers = combinedReducers({auth});