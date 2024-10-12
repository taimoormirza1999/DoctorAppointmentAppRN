import {Image, StyleSheet, Text, View} from 'react-native';
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
// import { TeethSvg2 } from '../svgs/TeethSVg'
// import TeethSvg2 from './Test'
// import TeethSvg from '../svgs/TeethSVg'

const CardItem = ({text, children}) => {
  return (
    <View style={styles.cardItem}>
      {children}
      {/* <Image source={image} style={[styles.cardImage, mediumShadow]} /> */}
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};
const Categories = () => {
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
      <CardItem text="Dentistry">{svgsCategories.teeth}</CardItem>
      <CardItem text="Cardiolo..">{svgsCategories.heart}</CardItem>
      <CardItem text="Pulmono..">{svgsCategories.lungs}</CardItem>
      <CardItem text="General">{svgsCategories.general}</CardItem>
      <CardItem text="Neurology">{svgsCategories.brain}</CardItem>
      <CardItem text="Gastroen..">{svgsCategories.stomach}</CardItem>
      <CardItem text="Laborato..">{svgsCategories.lab}</CardItem>
      <CardItem text="Vaccinat..">{svgsCategories.vacine}</CardItem>
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
    fontSize: '10@s',
    fontWeight: 'bold',
    color: gray600,
    marginTop: '6@s',
    color: '#333',
    textAlign: 'left',
  },
});
