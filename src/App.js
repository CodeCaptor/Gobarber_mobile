import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { persistor, store } from './store';
// import { Container } from './styles';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
                <Routes />
            </PersistGate>
        </Provider>
    );
};

export default App;
