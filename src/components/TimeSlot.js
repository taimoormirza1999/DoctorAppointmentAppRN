import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {lightShadow, mediumShadow} from '../constants/Shadows';
import {
  getTextAlignment,
  width,
  fontSizes,
} from '../constants/DimensionFontSizes';
import {gray50} from '../constants/Colors';
import {body, headings} from '../constants/commonStyles';
import {ScaledSheet} from 'react-native-size-matters';

const TimeSlot = ({text, b2lColor, sColor, fill, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        lightShadow,
        {backgroundColor: fill ? sColor : b2lColor, borderColor: sColor},
        styles.slot,
        mediumShadow,
      ]}>
      <Text
        style={[
          styles.text,
          body.bodySSemiBold,
          {color: fill ? gray50 : sColor},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TimeSlot;

const styles = ScaledSheet.create({
  slot: {
    paddingVertical: width * 0.025,
    borderWidth: 0.19,
    marginVertical: '6@s',
    borderRadius: '4@s',
    width: '30.5%',
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: fontSizes.small,
    textAlign: 'center',
  },
});
