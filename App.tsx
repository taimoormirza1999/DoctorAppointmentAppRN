import {View, Text, LogBox} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import AddressWrapper from './src/components/AddressWrapper';
import { UserProvider } from './src/components/context/UserContext';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
