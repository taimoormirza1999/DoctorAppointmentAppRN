import { StyleSheet, Text, View } from 'react-native'
import React, {  useEffect, useState } from 'react'
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const AddressWrapper = ({children}) => {
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
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('User Location:', latitude, longitude);  // Log current location
        // setAddressCoordinates({ latitude, longitude });  // Update state with new location

        // Call geocode API with new coordinates
        getGeocodeData(latitude, longitude);
      },
      (error) => {
        console.log('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
 <View style={{flex:1}}>
   {children}
 </View>
  );
}

export default AddressWrapper;
