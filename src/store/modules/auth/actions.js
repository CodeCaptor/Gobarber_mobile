import { authActions } from './types';

export function authRequest(email, password) {
    return {
        type: authActions.LOAD_REQUEST,
        payload: { email, password },
    };
}

export function authSuccess(token, user) {
    return {
        type: authActions.LOAD_SUCCESS,
        payload: { token, user },
    };
}

export function authFailure() {
    return {
        type: authActions.LOAD_FAILURE,
    };
}

export function authSignOut() {
    return {
        type: authActions.SIGNOUT,
    };
}
