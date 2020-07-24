import { combineReducers } from 'redux';

import Auth from './auth/reducer';
import User from './user/reducer';

export default combineReducers({ User, Auth });
