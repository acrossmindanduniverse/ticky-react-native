/**
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import reduxConfig from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const redux = reduxConfig();

const Main = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
