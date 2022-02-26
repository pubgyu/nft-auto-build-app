import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import stateUpdate from './reducer/Counter';
import Main from './pages/Main';

const Store = createStore(stateUpdate);

const App = () => {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
};

export default App;
