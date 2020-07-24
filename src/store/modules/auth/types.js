export const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
};

export const authActions = {
    LOAD_REQUEST: '@auth/LOAD_REQUEST',
    LOAD_FAILURE: '@auth/LOAD_FAILURE',
    LOAD_SUCCESS: '@auth/LOAD_SUCCESS',

    SIGNOUT: '@auth/SIGNOUT',
};
