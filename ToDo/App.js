import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';


import todoReducer from './store/reducers/toDoReducer';
import MyApp from './Screens/MyApp';

const store = createStore(todoReducer);

export default function App() {
  return (<Provider store={store}>
    <MyApp />
  </Provider>);
}

