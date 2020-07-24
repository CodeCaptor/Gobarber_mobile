import { userActions } from './types';

export function userUpdateProfileRequest(data) {
    return {
        type: userActions.UPDATE_PROFILE_REQUEST,
        payload: { data },
    };
}
export function userUpdateProfileSuccess(data) {
    return {
        type: userActions.UPDATE_PROFILE_SUCCESS,
        payload: { data },
    };
}
export function userUpdateProfileFailure() {
    return {
        type: userActions.UPDATE_PROFILE_FAILURE,
    };
}

export function userRegisterProfileRequest(data) {
    return {
        type: userActions.UPDATE_PROFILE_REQUEST,
        payload: { data },
    };
}

export function userRegisterProfileSuccess() {
    return {
        type: userActions.UPDATE_PROFILE_SUCCESS,
    };
}

export function userRegisterProfileFailure() {
    return {
        type: userActions.UPDATE_PROFILE_FAILURE,
    };
}
