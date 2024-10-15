import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {gray50, gray550} from '../constants/Colors';
import {ScaledSheet} from 'react-native-size-matters';
import {iconSizes} from '../constants/DimensionFontSizes';
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const HeaderTitle = ({title, icon, navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Animated.View
    entering={FadeInDown.springify()
      .damping(30)
      .mass(1)
      .stiffness(10)
      .overshootClamping(false)
      .restDisplacementThreshold(0.1)
      .restSpeedThreshold(5)}
    exiting={FadeInUp.springify()
      .damping(30)
      .mass(1)
      .stiffness(10)
      .overshootClamping(false)
      .restDisplacementThreshold(0.1)
      .restSpeedThreshold(5)}
   
   style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        underlayColor="#ffffff00"
        onPress={handleBack}>
        <Icon name="return-up-back" size={iconSizes.normal} color={gray550} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 10}]}>{title}</Text>
    </Animated.View>
  );
};
export default HeaderTitle;
const styles = ScaledSheet.create({
  header: {
    height: '40@s',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: gray50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '20@s',
    position: 'relative',
  },
  backBtn: {
    width: '30@s',
    height: '30#s',
    borderRadius: 15,
    position: 'absolute',
    left: '15@s',
  },
  title: {
    color: gray550,
    fontSize: '14@s',
    fontWeight: '600',
  },
});
