import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { persistor, store } from './store';
import App from './App';
import { Container } from './style/global';

export default function Index() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
                <Container>
                    <App />
                </Container>
            </PersistGate>
        </Provider>
    );
}
