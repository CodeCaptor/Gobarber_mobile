import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStore from '@react-native-community/async-storage';

if (__DEV__) {
    const tron = Reactotron.useReactNative()
        .configure({ host: '192.168.18.250' })
        .setAsyncStorageHandler(AsyncStore)
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect();

    tron.clear();
    console.tron = tron;
}
