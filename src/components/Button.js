import { Text,TouchableOpacity} from 'react-native';
import React from 'react';
import {primaryDarkColor} from '../constants/Colors';
import {ScaledSheet} from 'react-native-size-matters';
import { mediumShadow } from '../constants/Shadows';

const Button = ({handleNext, text}) => {
  return (
    <TouchableOpacity onPress={handleNext} style={[styles.button, mediumShadow]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = ScaledSheet.create({
  text: {
    fontSize: '12@s',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    width: '90%',
    alignSelef: 'center',
    borderRadius: '50@s',
    backgroundColor: primaryDarkColor,
    paddingVertical: '13@s',
  },
});
