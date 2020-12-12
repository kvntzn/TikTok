import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import RootNavigation from './src/navigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;
