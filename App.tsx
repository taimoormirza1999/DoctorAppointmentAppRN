import {View, Text, LogBox} from 'react-native';
import React, { useEffect } from 'react';
import AppNavigator from './src/AppNavigator';
import AddressWrapper from './src/components/AddressWrapper';
import { UserProvider } from './src/components/context/UserContext';
import { checkApplicationPermission, hideAllBadgeCount, requestUserPermission } from './src/utils/notifications';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(()=>{
    checkApplicationPermission();
    requestUserPermission();
    hideAllBadgeCount()
  },[])
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
