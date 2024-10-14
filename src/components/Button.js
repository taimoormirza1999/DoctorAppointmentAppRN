import { Text,TouchableOpacity} from 'react-native';
import React from 'react';
import {primaryDarkColor} from '../constants/Colors';
import {scale, ScaledSheet} from 'react-native-size-matters';
import { lightShadow, } from '../constants/Shadows';

const Button = ({handleNext, text,paddingVerical,width,marginLeft,backgroundColor,color, noShadow}) => {
  return (
    <TouchableOpacity onPress={handleNext} style={[styles.button, !noShadow&&lightShadow,{ width: width?width:'90%', paddingVertical: paddingVerical?paddingVerical:scale(13),marginLeft:marginLeft?marginLeft:0, backgroundColor:backgroundColor?backgroundColor:primaryDarkColor,}]}>
      <Text style={[styles.text,{color:color?color:'#fff'}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = ScaledSheet.create({
  text: {
    fontSize: '12@s',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignSelef: 'center',
    borderRadius: '50@s',
  },
});
