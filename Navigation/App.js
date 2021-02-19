import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MyNavigator from './Navag/MyNavigator';
import mealReducer from './store/reducers/MealReducer';


enableScreens();

const combinedReducer = combineReducers({
  meals:mealReducer
});

const store = createStore(combinedReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MyNavigator />
    </Provider>
  );
}
