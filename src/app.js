import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/common/LibraryList';

const app = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <LibraryList/>
      </View>
    </Provider>
  );
};

export default app; 