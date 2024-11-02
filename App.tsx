import {View, Text, LogBox} from 'react-native';
import React, { useEffect } from 'react';
import AppNavigator from './src/AppNavigator';
import AddressWrapper from './src/components/AddressWrapper';
import { UserProvider } from './src/components/context/UserContext';
import { checkApplicationPermission, hideAllBadgeCount, requestUserPermission } from './src/utils/notifications';
import { AppointmentsProvider } from './src/components/context/AppointmentsContext';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(()=>{
    checkApplicationPermission();
    requestUserPermission();
    hideAllBadgeCount()
  },[])
  return (
    <UserProvider>
      <AppointmentsProvider>
      <AppNavigator />
      </AppointmentsProvider>
    </UserProvider>
  );
};

export default App;
