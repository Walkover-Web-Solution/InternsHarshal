import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import todoReducer from './store/reducers/toDoReducer';
import MyApp from './Screens/MyApp';

const store = createStore(todoReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (<Provider store={store}>
    <MyApp />
  </Provider>);
}

