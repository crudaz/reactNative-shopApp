import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
        <ShopNavigator />
    </Provider>
  );
}