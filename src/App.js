import React from 'react';
import './config/reactotron';

import AppNavigator from './navigation/AppNavigator';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
