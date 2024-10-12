import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';
import HomeSVG from '../svgs/HomeSVG';
import TwoUsersSVG from '../svgs/TwoUsersSVG';
import {
  absolutePosWValue,
  AlignSelf,
  justRow,
  VerticalHorizontalCenter,
} from '../constants/commonStyles';
import {lightShadow} from '../constants/Shadows';
import MessagesSVG from '../svgs/MessagesSVG';
import StarSVG from '../svgs/StarSVG';
import MedalSVG from '../svgs/MedalSVG';
import Button from '../components/Button';

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
    iconSize: {width: 0.057, height: 0.057}, // Custom icon size for this one
  },
  {
    icon: MessagesSVG,
    fill: gray600,
    rating: '2000',
    label: 'reviews',
  },
];
const DoctorsDetails = ({navigation}) => {
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
      <HeaderTitle title={'Doctor Details'} navigation={navigation} />
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containe}>
            <DoctorCardHorizontal
              image={DoctorsImages.doctor7}
              doctorName="Dr. David Patel"
              category="Cardiologist"
              location="Cardiology Center, USA"
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
              Dr. David Patel, a dedicated cardiologist, brings a wealth of
              experience to Golden Gate Cardiology Center in Golden Gate, CA.
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
                <Image
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
                          <StarSVG />
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
            absolutePosWValue('bottom', 15),
            {width: '100%', alignItems: 'center'},
          ]}>
          <Button text={'BookBook Appointment'} handleNext={()=>navigation.navigate("BookAppointment")} />
        </View>
        {/* <CustomBottomTab activeTab={'doctors'} navigation={navigation} /> */}
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
    marginBottom: '7@s',
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
  // heading: {
  //   color: '#000',
  //   fontSize: '17@s',
  //   fontWeight: '700',
  //   marginLeft: 15,
  // },
  // linearGradient: {
  //   width: 120,
  //   height: 80,
  //   borderRadius: 10,
  //   marginLeft: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // catName: {
  //   color: '#fff',
  //   fontSize: 16,
  //   fontWeight: '700',
  // },
  // docItem: {
  //   width: '45%',

  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   borderWidth: 0.2,
  //   margin: 10,
  // },
  // docImg: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   alignSelf: 'center',
  //   marginTop: 20,
  // },
  // docName: {
  //   fontSize: 18,
  //   fontWeight: '700',
  //   alignSelf: 'center',
  //   marginTop: 10,
  // },
  // docSpl: {
  //   fontSize: 14,
  //   marginTop: 5,
  //   fontWeight: '600',
  //   alignSelf: 'center',
  //   color: 'green',
  //   backgroundColor: '#f2f2f2',
  //   padding: 5,
  //   borderRadius: 10,
  // },
  // status: {
  //   fontSize: 14,
  //   marginTop: 5,
  //   fontWeight: '600',
  //   alignSelf: 'center',
  // },
});
