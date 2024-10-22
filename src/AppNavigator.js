import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment';
import Success from './screens/Success';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import OnBoarding from './screens/OnBoarding';
import Completed from './screens/Completed';
import CallAmb from './screens/CallAmb';
import AllDoctors from './screens/AllDoctors';
import DoctorsDetails from './screens/DoctorsDetails';
import MyAppointments from './screens/MyAppointments';
import Notifications from './screens/Notifications';
import MapAddress from './screens/MapAddress';
import Profile from './screens/Profile';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MapAddress}
          name="MapAddress"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{headerShown: false, animation: 'fade',}}
        />
        <Stack.Screen
          component={AllDoctors}
          name="AllDoctors"
          options={{headerShown: false, animation:'fade'}}
        />
        <Stack.Screen
          component={DoctorsDetails}
          name="DoctorsDetails"
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          component={MyAppointments}
          name="MyAppointments"
          options={{headerShown: false, animation:'fade'}}
        />
        <Stack.Screen
          component={OnBoarding}
          name="OnBoarding"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Notifications}
          name="Notifications"
          options={{headerShown: false, animation: 'fade',
           }}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false, animation:'fade_from_bottom'}}
        />
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          component={SignIn}
          name="SignIn"
          options={{headerShown: false, animation:'fade_from_bottom'}}
        />
        <Stack.Screen
          component={SignUp}
          name="SignUp"
          options={{headerShown: false, animation:'fade_from_bottom'}}
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
