import { Alert } from 'react-native';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { userActions } from './types';
import {
    userUpdateProfileSuccess,
    userUpdateProfileFailure,
    userRegisterProfileSuccess,
    userRegisterProfileFailure,
} from './actions';

export function* signup({ payload }) {
    const { name, email, password } = payload;
    try {
        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });
        yield put(userRegisterProfileSuccess());
        // history.push('/');
        // history.go();
    } catch (error) {
        Alert.alert('Falha no cadastro, verifique seus dados.');
        yield put(userRegisterProfileFailure());
    }
}

export function* update({ payload }) {
    const { name, email, avatar_id, ...rest } = payload.data;
    try {
        const profile = {
            name,
            email,
            avatar_id,
            ...(rest.oldPassword ? rest : {}),
        };
        const response = yield call(api.put, 'users', profile);
        Alert.alert('Pronto!', 'Perfil atualizado com sucesso!');
        yield put(userUpdateProfileSuccess(response.data));
    } catch (error) {
        Alert.alert(
            'Falha na atualização',
            'Falha ao atualizar perfil, revise seus dados'
        );
        yield put(userUpdateProfileFailure());
    }
}

export default all([
    takeLatest(userActions.REGISTER_PROFILE_SUCCESS, signup),
    takeLatest(userActions.UPDATE_PROFILE_REQUEST, update),
]);
