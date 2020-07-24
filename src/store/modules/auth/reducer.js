import produce from 'immer';
import { INITIAL_STATE, authActions } from './types';

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case authActions.LOAD_REQUEST:
            return produce(state, (draft) => {
                draft.loading = true;
            });
        case authActions.LOAD_SUCCESS:
            return produce(state, (draft) => {
                draft.token = action.payload.token;
                draft.signed = true;
                draft.loading = false;
            });
        case authActions.LOAD_FAILURE:
            return produce(state, (draft) => {
                draft.loading = false;
            });
        case authActions.SIGNOUT:
            return produce(state, (draft) => {
                draft.token = null;
                draft.signed = false;
            });
        default:
            return state;
    }
}
