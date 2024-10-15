import {View, Text, StyleSheet, StatusBar, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashCardRow from '../components/Splash/SplashCardRow';
import {relative, TestingHighLighter} from '../constants/commonStyles';
import {height, width} from '../constants/DimensionFontSizes';
import FastImage from 'react-native-fast-image';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { AnimatedWrapper } from '../constants/AnimationEntering';

// bigImage2==null


const splashData = [
  {
    position1: {color: '#ACA1CD'},
    position2: {image: 'Doctor1'},
    position3: {color: '#DC9497'},
  },
  {
    position1: {image: 'Doctor2'},
    position2: {color: '#352261'},
    position3: {image: 'Doctor3'},
  },
  {
    position1: {color: '#D7A99C'},
    position2: {image: 'Doctor4'},
    position3: {color: '#4D9B91'},
  },
];
const Splash = ({navigation}) => {
  const [location, setLocation] = useState(null);

  // Function to request location permission
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getCurrentLocation();
    }
  };

  // Function to get the current location
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.log(error.code, error.message);
        Alert.alert('Error', 'Failed to get location');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
  useEffect(() => {
    // requestLocationPermission();
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle = 'light-content'/>
      {splashData.map((item, index) => (
        <View
          key={index}
          style={{
            flex: index == 1 ? 0.38 : 0.3,
            marginTop: index == 0 ? -width * 0.05 : width * 0.03,
            marginBottom: index == 2 && -width * 0.05,
          }}>
          <SplashCardRow item={item} />
        </View>
      ))}
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.35)',
          position: 'absolute',
          top: 0,
          flex: 1,
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

         <AnimatedWrapper style={[relative,{height:height, width:width, flex:1}]}>
          <FastImage
          source={require('../images/mlogo.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: width * 0.3,
            width: width * 0.3,
            zIndex: 999999999,
            position: 'absolute',
            top: height * 0.43,
            left:'50%',
            transform: [{ translateX: -width * 0.15 }],
          }}
        />
          </AnimatedWrapper>
      
      </View>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    // justifyContent: 'center',
    backgroundColor: '#2B2B2B',
    // alignItems: 'center',
    // backgroundColor: 'blue',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff',
  },
  title: {color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 20},
});
