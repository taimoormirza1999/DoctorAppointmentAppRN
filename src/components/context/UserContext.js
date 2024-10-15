import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
// Step 1: Create Context
export const UserContext = createContext();

// Step 2: Create Provider Component
export const UserProvider = ({ children }) => {
    const [address, setAddress] = useState('');
    const getGeocodeData = async (latitude, longitude) => {
      const apiKey = 'AIzaSyD9mUVWyCGKxCDgdDuoYImTzQz28KCU_js';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
  
        if (data.status === 'OK') {
          const results = data.results[0];
          const addressComponents = results.address_components;
  
          // Extract city and country
          let city = '';
          let country = '';
  
          addressComponents.forEach(component => {
            if (component.types.includes('locality')) {
              city = component.long_name;
            }
            if (component.types.includes('country')) {
              country = component.long_name;
            }
          });
  
          const fullAddress = `${city}, ${country}`;
          console.log(`City: ${city}, Country: ${country}`);
          setAddress(fullAddress);  // Update address state
  
        } else {
          console.error('Error in the Geocoding response:', data.status);
        }
      } catch (error) {
        console.error('Error fetching Geocoding data:', error);
      }
    };
    const requestLocationPermission = async () => {
        console.log("getCurrentLocation222")
      const result = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      );
      
      if (result === 'granted') {
        getCurrentLocation(); 
      } else {
        console.log('Location permission denied');
      }
    };
    const getCurrentLocation = () => {
        console.log("getCurrentLocation")
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('User Location:', latitude, longitude); 
          getGeocodeData(latitude, longitude);
        },
        (error) => {
          console.log('Error getting location:', error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };
    // Request location permission when component mounts
    useEffect(() => {
       
        requestLocationPermission();
      }, []);
const test=()=>{
    alert("DFf")
}
    return (
      // Step 3: Provide the username state to child components
      <UserContext.Provider value={[address, setAddress,requestLocationPermission]}>
        {children}
      </UserContext.Provider>
    );
  };