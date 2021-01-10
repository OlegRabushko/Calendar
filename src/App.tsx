import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { Calendar } from './Components/Calendar/Calendar';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Calendar />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
