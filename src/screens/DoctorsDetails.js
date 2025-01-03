import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import DoctorsList from '../components/DoctorsList';
import CustomBottomTab from '../components/CustomBottomTab';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import DoctorCardHorizontal from '../components/DoctorCardHorizontal';
import {DoctorsImages} from '../constants/DoctorsImages';
import HeaderTitle from '../components/HeaderTitle';
import {
  gray100,
  gray400,
  gray50,
  gray500,
  gray600,
  primaryDarkColor,
} from '../constants/Colors';

import TwoUsersSVG from '../svgs/TwoUsersSVG';
import {
  absolutePosWValue,
  AlignSelf,
  containerStyles,
  FixedButtonBackground,
  justRow,
  VerticalHorizontalCenter,
} from '../constants/commonStyles';
import {lightShadow} from '../constants/Shadows';
import MessagesSVG from '../svgs/MessagesSVG';
import StarSVG from '../svgs/StarSVG';
import MedalSVG from '../svgs/MedalSVG';
import Button from '../components/Button';
import FastImage from 'react-native-fast-image';

const TabItem = ({
  icon: Icon,
  fill,
  rating,
  label,
  iconSize = {width: 0.075, height: 0.075},
}) => {
  return (
    <View style={[VerticalHorizontalCenter]}>
      <View style={[styles.iconContainer, lightShadow]}>
        <Icon
          fill={fill}
          width={width * iconSize.width}
          height={width * iconSize.height}
        />
      </View>
      <Text style={styles.tabBarRating}>{rating}</Text>
      <Text style={styles.tabBarText}>{label}</Text>
    </View>
  );
};
const tabData = [
  {
    icon: TwoUsersSVG,
    fill: gray600,
    rating: '2000',
    label: 'patients',
  },
  {
    icon: MedalSVG,
    fill: gray600,
    rating: '2000',
    label: 'experience',
  },
  {
    icon: StarSVG,
    fill: primaryDarkColor,
    rating: '2000',
    label: 'rating',
    iconSize: {width: 0.057, height: 0.057}, 
  },
  {
    icon: MessagesSVG,
    fill: gray600,
    rating: '2000',
    label: 'reviews',
  },
];
const DoctorsDetails = ({navigation, route}) => {
  const [item, setItem] = useState(null);
  React.useEffect(() => {
    if (route.params?.selectedDoctor) {
      setItem(route.params?.selectedDoctor);
    }
  }, [route.params?.selectedDoctor]);
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
      <View style={containerStyles}>
        <ScrollView
          style={containerStyles}
          showsVerticalScrollIndicator={false}>
          <HeaderTitle title={'Doctor Details'} navigation={navigation} />
          <View style={styles.containe}>
            <DoctorCardHorizontal
              image={item?.image_path}
              doctorName={item?.doctorName}
              category={item?.category}
              location={item?.location}
              handleAction={() => {}}
            />

            <View style={[styles.tabBarStyle]}>
              {tabData.map((item, index) => (
                <TabItem
                  key={index}
                  icon={item.icon}
                  fill={item.fill}
                  rating={item.rating}
                  label={item.label}
                  iconSize={item.iconSize}
                />
              ))}
            </View>
            <Text style={[styles.heading]}>About me</Text>
            <Text style={[styles.description]}>
              {item?.doctorName}, a dedicated {item?.category}, brings a wealth
              of experience to Golden Gate {item?.category} Center in{' '}
              {item?.location}.
            </Text>

            <View style={[{marginTop: 20}]}>
              <Text style={[styles.heading]}>Working Time</Text>
              <Text style={[styles.description]}>
                Monday-Friday, 08.00 AM-18.00 pM
              </Text>
            </View>

            {/* Reviews */}
            <View style={styles.section}>
              <Text style={[styles.heading]}>Reviews</Text>
              <View style={[justRow]}>
                <FastImage
                  source={require('../images/profile-customer.png')}
                  style={styles.profileUserImage}
                />
                <View style={[{marginLeft: scale(10)}, AlignSelf]}>
                  <Text style={styles.subHeading}>Emily Anderson</Text>
                  <View style={[justRow]}>
                    <Text style={styles.description}>5.5</Text>
                    <View style={[justRow]}>
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <View style={{marginLeft: scale(3)}}>
                            <StarSVG />
                          </View>
                        ))}
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.description, {marginTop: scale(10)}]}>
                Dr. Patel is a true professional who genuinely cares about his
                patients. I highly recommend Dr. Patel to anyone seeking
                exceptional cardiac care.
              </Text>
            </View>
            <View style={{marginVertical: width * 0.1}}></View>
          </View>
        </ScrollView>
        <View
          style={[
            FixedButtonBackground,
            absolutePosWValue('bottom', 0),
            {width: '100%', alignItems: 'center'},
          ]}>
          <Button
            text={'BookBook Appointment'}
            handleNext={() =>
              navigation.navigate('BookAppointment', {
                doctorName: item?.doctorName,
                doctorCategory: item?.category,
                doctorLocation: item?.location,
                doctorName: item?.doctorName,
                doctorMedia: item?.imageId,
              })
            }
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default DoctorsDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '96%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  section: {
    marginTop: '10@s',
  },
  heading: {
    fontSize: '13@s',
    fontWeight: '700',
    marginBottom: '10@s',
    color: gray600,
  },
  subHeading: {
    fontSize: '12@s',
    fontWeight: '600',
    marginBottom: '7@s',
    color: gray600,
  },
  description: {
    fontSize: '12@s',
    fontWeight: '400',
    marginBottom: '10@s',
    color: gray600,
  },
  profileUserImage: {
    resizeMode: 'contain',
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: '50@s',
  },
  iconContainer: {
    backgroundColor: gray100,
    padding: '12@s',
    borderRadius: '50@s',
    marginBottom: '10@s',
  },
  tabBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '10@s',
  },
  tabBarIcon: {
    width: '30@s',
    height: '30@s',
    resizeMode: 'contain',
    tintColor: primaryDarkColor,
  },
  tabBarRating: {
    color: gray600,
    fontSize: '11@s',
    fontWeight: '600',
    paddingTop: '3@s',
  },
  tabBarText: {
    color: gray500,
    fontSize: '11.5@s',
    fontWeight: '400',
    paddingTop: '3@s',
  },
 
});
