import {View, Text, LogBox} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';

const App = () => {
  LogBox.ignoreAllLogs()
  return (

      <AppNavigator/>

  )
};

export default App;