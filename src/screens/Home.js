import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import CustomBottomTab from '../components/CustomBottomTab';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Categories from '../components/Categories';
import DoctorsList from '../components/DoctorsList';
import {
  absolute,
  absolutePosWJustValue,
  absolutePosWValue,
  body,
  headings,
  justRow,
  relative,
  w100,
  w65,
  w70,
} from '../constants/commonStyles';
import LocationSVG from '../svgs/LocationSVG';
import NotificationSVG from '../svgs/NotificationSVG';
import {gray100, gray600} from '../constants/Colors';
import {lightShadow} from '../constants/Shadows';
import {
  AllDoctorsData,
  AllHospitalsData,
  CardiologyDoctors,
  GeneralDoctors,
  NeurologyDoctors,
  SliderData,
} from '../constants/data';
import FastImage from 'react-native-fast-image';
import {AnimatedWrapper} from '../constants/AnimationEntering';
import NotificationBell from '../components/NotificationBell';
import HospitalList from '../components/HospitalList';
import LinearGradient from 'react-native-linear-gradient';
import AddressWrapper from '../components/AddressWrapper';
import { UserContext } from '../components/context/UserContext';
import { width } from '../constants/DimensionFontSizes';
const HeaderHome = ({navigation}) => {
  const [address,, requestLocationPermission] = useContext(UserContext);

  return (
    <View style={{paddingVertical: scale(10), marginHorizontal: scale(7)}}>
      <Text style={[[[body.bodyXSRegular, {marginBottom: scale(5), fontWeight:'700'}]]]}>
        Location
      </Text>
      <View style={[justRow, w100]}>
        
        <TouchableOpacity onPress={()=>{
          navigation.navigate("MapAddress")
        }} style={[justRow]}>
          <LocationSVG height={scale(18)} width={scale(18)} />
          <Text style={[[body.bodySSemiBold, {marginLeft: 5}]]}>
           {address.fullAddress}
          </Text>
        </TouchableOpacity>
      
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications');
        }}
        style={[
          absolutePosWValue('right', scale(10)),
          lightShadow,
          {
            top: scale(10),
            backgroundColor: gray100,
            padding: scale(4),
            borderRadius: scale(50),
          },
        ]}>
        <View style={[relative]}>
          <NotificationBell />
          <View
            style={[
              absolute,
              absolutePosWJustValue('right', 2),
              {
                backgroundColor: 'red',
                height: scale(6),
                width: scale(6),
                borderRadius: scale(50),
                top: 3,
              },
            ]}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Home = ({navigation}) => {
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containe}>
            {/* header */}
            <View style={styles.containedWidth}>
            <HeaderHome navigation={navigation} />
            <View
              style={[{borderRadius: 10, marginHorizontal: scale(10)}]}>
              <FastImage
                source={SliderData.image}
                style={[styles.banner]}
                resizeMode={FastImage.resizeMode.cover}
              />
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[
                  'rgba(81,147,139,0.9)',
                  'rgba(81,147,139,0.5)',
                  'rgba(81,147,139,0.0)',
                  'rgba(81,147,139,0.4)',
                ]}
                style={[
                  absolute,
                  {
                    flex: 1,
                    // backgroundColor: 'rgba(0,0,0,1',
                    height: '95%',
                    width: '100%',
                    // margin: '100%',
                    marginTop: scale(7),
                    borderRadius: scale(10),
                  },
                ]}>
                <View style={[w65, {left: scale(13), top: '30%'}]}>
                  <Text style={[headings.h2, styles.SlideHeading]}>
                    {SliderData.title}
                  </Text>
                  <Text style={[body.bodySMedium, styles.SlideBody]}>
                    {SliderData.description}
                  </Text>
                </View>
              </LinearGradient>
            </View>
            </View>

            <AnimatedWrapper style={[styles.section,styles.containedWidth]}>
              <Text style={[headings.h1, styles.heading]}>Categories</Text>
              <Categories navigation={navigation} />
            </AnimatedWrapper>
            <View style={[styles.section,styles.containedWidth]}>
              <Text style={[headings.h1, styles.heading]}>
                Top Rated Doctors
              </Text>
              <View style={{alignItems: 'center'}}>
                <DoctorsList
                  navigation={navigation}
                  doctorsData={AllDoctorsData}
                  limit={8}
                  start={4}
                />
              </View>
            </View>
            <View style={[{marginTop: scale(-35),marginLeft:scale(10)},]}>
              <Text style={[headings.h1, styles.heading,{marginLeft:scale(10)}]}>Hospitals</Text>
              <View style={{}}>
                <HospitalList
                  navigation={navigation}
                  doctorsData={AllHospitalsData}
                />
              </View>
            </View>
            {/* Neurologist */}
            <View style={[styles.section,styles.containedWidth]}>
              <Text style={[headings.h1, styles.heading]}>
                Top Neurologist Doctors
              </Text>
              <View style={{alignItems: 'center'}}>
                <DoctorsList
                  navigation={navigation}
                  doctorsData={NeurologyDoctors}
                  limit={2}
                  bottomHeight={5}
                />
              </View>
            </View>
            {/* <Test/> */}
            {/*  Health Care */}
            <View style={[styles.section,styles.containedWidth]}>
              <Text style={[headings.h1, styles.heading]}>
                Top Health Care Doctors
              </Text>
              <View style={{alignItems: 'center'}}>
                <DoctorsList
                  navigation={navigation}
                  doctorsData={GeneralDoctors}
                  limit={4}
                />
              </View>
            </View>
     
          </View>
        </ScrollView>
        <CustomBottomTab activeTab={'home'} navigation={navigation} />
      </View>
    </SafeAreaWrapper>
  );
};

export default Home;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  containedWidth:{
    width: '96%',
    alignSelf: 'center',
  },
  section: {
    marginTop: '20@s',
  },
  banner: {
    width: '100%',
    height: '150@s',
    resizeMode: 'cover',
    borderRadius: '10@s',
    alignSelf: 'center',
    marginTop: '7@s',
  },
  heading: {
    color: '#000',
    marginLeft: '13@s',
    marginVertical: '7@s',
  },
  SlideHeading: {
    color: '#fff',
    marginBottom: '5@s',
  },
  SlideBody: {
    color: '#fff',
    // marginVertical: '10@s',
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
