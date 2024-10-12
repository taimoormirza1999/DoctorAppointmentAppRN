import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashCardRow from '../components/Splash/SplashCardRow';
import {TestingHighLighter} from '../constants/commonStyles';
import {height, width} from '../constants/DimensionFontSizes';

// bigImage2==null

const splashData = [
  //c i c
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
  useEffect(() => {
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
          backgroundColor: 'rgba(0,0,0,0.4)',
          position: 'absolute',
          top: 0,
          flex: 1,
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/mlogo.png')}
          style={{
            height: width * 0.3,
            width: width * 0.3,
            resizeMode: 'contain',
            zIndex: 999999999,
            position: 'absolute',
            top: height * 0.43,
          }}
        />
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
