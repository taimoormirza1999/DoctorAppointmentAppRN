import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {width} from '../constants/DimensionFontSizes';
import Button from '../components/Button';
import {primaryDarkColor} from '../constants/Colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {scale, ScaledSheet} from 'react-native-size-matters';
import { mediumShadow} from '../constants/Shadows'
import { useNavigation } from '@react-navigation/native';
const DynamicComponent = ({handleNext, title, description, image}) => {
  return (
    <View style={{}}>
      <View style={{flex: 0.8}}>
        <Image
          source={image}
          style={{
            resizeMode: 'cover',
            flex: 1,
            height: width,
            width: width,
          }}
        />
      </View>
      <View style={[styles.bottomCard, mediumShadow]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <Button text={'Next'} handleNext={handleNext} />
      </View>
    </View>
  );
};

const OnBoarding = () => {
    const navigation=useNavigation(true);
  const onboardingRef = useRef(null);
  const images = {
    Doctor1: require('../images/main/Doctor1.png'),
    Doctor2: require('../images/main/Doctor5.png'),
    Doctor3: require('../images/main/Doctor9.png'),

  };
  const handleNext = () => {
    onboardingRef.current.goNext();
  };

  
  const CustomDot = ({selected}) => {
    let backgroundColor = selected ? primaryDarkColor : '#CCCCCC';
    return (
      <View
        style={[
          styles.dot,
          {
            backgroundColor
          },
        ]}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
        <StatusBar barStyle = 'light-content' />
      <Onboarding
        ref={onboardingRef}
        showNext={false} 
        showSkip={false} 
        showDone={false} 
        DotComponent={CustomDot} 
        bottomBarHighlight={false} 
      
        pages={[
          {
            backgroundColor: 'white',
            image: (
              <DynamicComponent
                handleNext={handleNext}
                image={images.Doctor1}
                title="Meet Doctors Online"
                description="Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations."
              />
            ),
          },
          {
            backgroundColor: 'white',
            image: (
              <DynamicComponent
                handleNext={handleNext}
                title="Connect with Specialists"
                description="Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations."
                image={images.Doctor2}
              />
            ),
          },
          {
            backgroundColor: 'white',
            image: (
              <DynamicComponent
                handleNext={() =>{navigation.navigate('Home')}}
                title="Thousands of Online Specialists"
                description=" Explore a Vast Array of Online Medical Specialists, Offering an Extensive Range of Expertise Tailored to Your Healthcare Needs."
                image={images.Doctor3}
              />
            ),
          },
        ]}
      />
     
     
    </View>
  );
};

export default OnBoarding;

const styles = ScaledSheet.create({
  title: {fontSize: '15.5@s', fontWeight: 'bold', paddingBottom: '10@s', marginTop:'10@s'},
  description: {
    fontSize: '12.5@s',
    fontWeight: '500',
    paddingBottom: '20@s',
    textAlign: 'center',
  },
  bottomCard: {
    flex: 0.3,
    backgroundColor: 'white',
    marginTop: '-20@s',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    // borderRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    width: width * 0.95,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotBar: {
    backgroundColor: 'red', 
    paddingVertical: '10@s', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    position: 'absolute',
    bottom: 0, 
    width: '100%',
  },
});