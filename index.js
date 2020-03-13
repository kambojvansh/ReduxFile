/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/redux/App'
import { Provider } from 'react-redux';

import configureStore from './src/redux/store/configureStore';
import deshboard from './src/screens/deshboard'

const store = configureStore()

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

// AppRegistry.registerComponent(appName, () => RNRedux);
AppRegistry.registerComponent(appName, () => deshboard);
