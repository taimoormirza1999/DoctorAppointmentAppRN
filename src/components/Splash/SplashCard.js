import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '../../constants/DimensionFontSizes';
import { SplashCardStyles, TestingHighLighter } from '../../constants/commonStyles';
import '../../images/main/Doctor1.png'
const SplashCard = ({image, logo, marginLeft}) => {
  const images = {
    Doctor1: require('../../images/main/Doctor1.png'),
    Doctor2: require('../../images/main/Doctor2.png'),
    Doctor3: require('../../images/main/Doctor3.png'),
    Doctor4: require('../../images/main/Doctor4.png'),
  };
  return (
    <View style={[ { flex: 1,  }]}>
    <Image
      source={images[image]}
      style={[{ width: '100%', height: '100%', resizeMode: 'cover', },SplashCardStyles]} 
    />
  </View>
  )
}

export default SplashCard

const styles = StyleSheet.create({})