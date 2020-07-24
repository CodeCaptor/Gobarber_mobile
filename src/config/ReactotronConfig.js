import Reactotron from 'reactotron-react-native';
import ReactotronRedux from 'reactotron-redux';
import ReactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
    const tron = Reactotron.configure({ host: '192.168.18.250' })
        .useReactNative()
        .use(ReactotronRedux())
        .use(ReactotronSaga)
        .connect();

    tron.clear();
    console.tron = tron;
}
