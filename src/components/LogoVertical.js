import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {width} from '../constants/DimensionFontSizes';
import LogoSVG from '../svgs/LogoSVG';
import AppointmentSVG from '../svgs/AppointmentSVG';
import {ScaledSheet} from 'react-native-size-matters';

const LogoVertical = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical:'10@s',}}>
      {/* <FastImage
        source={require('../images/logo.png')}
        style={{width: width * 0.25, height: width * 0.22}}
        resizeMode={FastImage.resizeMode.contain}
      /> */}
      <LogoSVG height={width * 0.15} width={width * 0.15} />
      {/* <AppointmentSVG/> */}
      <Text style={[styles.logoText]}>HealthPal</Text>
    </View>
  );
};

export default LogoVertical;

const styles = ScaledSheet.create({
  logoText: {
    fontSize: width * 0.050,
    fontWeight: '500',
    color: '#000',
    marginTop: '10@s',
  },
});
