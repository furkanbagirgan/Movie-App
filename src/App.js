import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './navigation';
import store from './redux/store';

const App = () => {
  //Here, the theme and user contexts surround the application.
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
