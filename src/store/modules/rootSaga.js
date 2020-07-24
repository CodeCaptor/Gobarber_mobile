import { all } from 'redux-saga/effects';

import Auth from './auth/sagas';
import User from './user/sagas';

export default function* rootSaga() {
    return yield all([Auth, User]);
}
