import React from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './components/configs/firebase';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Navbar />
            <AddTodo />
            <Todos />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
