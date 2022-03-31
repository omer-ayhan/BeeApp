import React from 'react';
import {Provider} from 'react-redux';

import store from './src/infrastructure/redux/store';
import MainNavigator from './src/ui/navigators/main.navigator';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
