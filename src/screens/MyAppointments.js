import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import DoctorsList from '../components/DoctorsList';
import CustomBottomTab from '../components/CustomBottomTab';
import {ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import HeaderTitle from '../components/HeaderTitle';
import { containerStyles, headingCommonStyle, headings, sectionSeprator } from '../constants/commonStyles';
import AppointmentList from '../components/AppointmentList';

const MyAppointments = ({navigation}) => {
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
    <View style={containerStyles}>
      <ScrollView
        style={{}}
        showsVerticalScrollIndicator={false}>
        <View style={containerStyles}>
          <HeaderTitle title="My Appointments" navigation={navigation} goHome={true}/>
         
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <AppointmentList navigation={navigation} />
            <View style={{flexDirection: 'row', width: '100%'}}></View>
          </View>
        </View>
      </ScrollView>
      <CustomBottomTab activeTab={'appointments'} navigation={navigation} />
    </View>
  </SafeAreaWrapper>
  )
}

export default MyAppointments

const styles = ScaledSheet.create({
    container: {
      flex: 1,
      width: '96%',
      alignSelf: 'center',
      backgroundColor: '#fff',
    },
    section: {
      marginTop: '20@s',
    },
    banner: {
      width: width - 0.7,
      height: '150@s',
      resizeMode: 'contain',
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 10,
    },
    heading: {
      color: '#000',
      fontSize: '17@s',
      fontWeight: '700',
      marginLeft: 15,
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