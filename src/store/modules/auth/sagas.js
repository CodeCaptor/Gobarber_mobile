import { Alert } from 'react-native';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { authActions } from './types';
import { authSuccess, authFailure } from './actions';

export function* auth({ payload }) {
    const { email, password } = payload;
    try {
        const response = yield call(api.post, '/sessions', { email, password });
        const { token, user } = response.data;
        if (user.provider) {
            Alert.alert('Erro no login', 'usuário é prestador de serviço');
            yield put(authFailure());
            return;
        }
        api.defaults.headers.Authorization = `Bearer ${token}`;
        yield put(authSuccess(token, user));
        // history.push('/dashboard');
    } catch (error) {
        console.tron.log(error);
        Alert.alert(
            'Falha na autenticação',
            'usuário ou senha incorretos, tente novamente'
        );
        yield put(authFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) {
        return;
    }
    const { token } = payload.Auth;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}
export function signOut() {
    // history.push('/');
    // history.go();
}

export default all([
    takeLatest(authActions.LOAD_REQUEST, auth),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(authActions.SIGNOUT, signOut),
]);
