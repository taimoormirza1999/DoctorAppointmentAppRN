import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment';
import Success from './screens/Success';
import Pending from './screens/Pending';
import OnBoarding from './screens/OnBoarding';
import Completed from './screens/Completed';
import CallAmb from './screens/CallAmb';
import AllDoctors from './screens/AllDoctors';
import SafeAreaWrapper from './constants/SafeAreaWrapper';
import DoctorsDetails from './screens/DoctorsDetails';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DoctorsDetails" >
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AllDoctors}
          name="AllDoctors"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={DoctorsDetails}
          name="DoctorsDetails"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SafeAreaWrapper}
          name="SafeAreaWrapper"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OnBoarding}
          name="OnBoarding"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Pending}
          name="Pending"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Completed}
          name="Completed"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CallAmb}
          name="CallAmb"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
