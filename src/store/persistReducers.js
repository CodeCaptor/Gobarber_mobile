import AynscStore from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'gobarber09',
            storage: AynscStore,
            whitelist: ['Auth', 'User'],
        },
        reducers
    );
    return persistedReducer;
};
