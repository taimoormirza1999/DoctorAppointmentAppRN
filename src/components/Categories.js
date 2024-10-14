import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {gray600} from '../constants/Colors';
import {mediumShadow} from '../constants/Shadows';
import Test from './Test';
import TeethSVG from '../svgs/TeethSVG';
import HeartSVG from '../svgs/HeartSVG';
import LungsSVG from '../svgs/LungsSVG';
import GeneralSVG from '../svgs/GeneralSVG';
import BrainSVG from '../svgs/BrainSVG';
import StomachSVG from '../svgs/StomachSVG';
import LabSVG from '../svgs/LabSVG';
import VacineSVG from '../svgs/VacineSVG';
import { categories } from '../constants/data';
// import { TeethSvg2 } from '../svgs/TeethSVg'
// import TeethSvg2 from './Test'
// import TeethSvg from '../svgs/TeethSVg'

const CardItem = ({text, children, navigation}) => {

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AllDoctors', {pageTitle: text});
      }}
      style={styles.cardItem}>
      {children}
      <Text style={styles.cardText}>{text.length>9?text.substring(0,9)+"..":text}</Text>
    </TouchableOpacity>
  );
};
const Categories = ({navigation}) => {
  const svgsCategories = {
    teeth: <TeethSVG />,
    heart: <HeartSVG />,
    lungs: <LungsSVG />,
    general: <GeneralSVG />,
    brain: <BrainSVG />,
    stomach: <StomachSVG />,
    lab: <LabSVG />,
    vacine: <VacineSVG />,
  };

  return (
    <View style={styles.container}>
      <FlatList
  data={categories(svgsCategories)}
  key={4}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <CardItem navigation={navigation} text={item.text}>
      {item.icon}
    </CardItem>
  )}
  numColumns={4}
/>
    </View>
  );
};

export default Categories;

const styles = ScaledSheet.create({
  container: {
    // Fixed the typo here
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '5@s',
  },
  cardItem: {
    // Fixed the typo here
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5@s',
  },
  cardImage: {
    height: '60@s',
    width: '65@s',
    resizeMode: 'contain',
    margin: '4@s',
  },
  cardText: {
    fontSize: '10.3@s',
    fontWeight: 'bold',
    color: gray600,
    marginTop: '10@s',
    color: '#333',
    textAlign: 'left',
  },
});
