import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {lightShadow} from '../constants/Shadows';
import {scale, ScaledSheet} from 'react-native-size-matters';

import appointmentImage from '../images/Icons/Appointment.png';
import {gray200, gray300, gray400, gray500, gray600, gray800, paleGreen} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';
import AppointmentSVG from '../svgs/AppointmentSVG';
import HomeSVG from '../svgs/HomeSVG';
import DoctorSVG from '../svgs/DoctorSVG';
import ProfileSVG from '../svgs/ProfileSVG';
import NotificationSVG from '../svgs/NotificationSVG';
const ItemCompo = ({children, image, text, active, handlerAction}) => {
  const activeTabTextColor=gray800;
const nonActiveTabTextColor=gray400;
  return (
    <TouchableOpacity style={[styles.buttonWrapper]} onPress={handlerAction}>
      <View
        style={{
          padding: scale(7),
          backgroundColor: active ? paleGreen : 'white',
          lightShadow,
          borderRadius: 50,
        }}>
        {children}
      </View>

      <Text style={[styles.bottomText, {color:active ?  gray500 :  gray400, fontWeight: active ?700:500,}]}>{text}</Text>
    </TouchableOpacity>
  );
};
const CustomBottomTab = ({activeTab, title, image, navigation}) => {
  const handlers = {
    home: () => navigation.navigate('Home'),
    appointment: () => navigation.navigate('MyAppointments'),
    doctors: () => navigation.navigate('AllDoctors'),
    notification: () => navigation.navigate('Notifications'),
    profile: () => navigation.navigate('Profile'),
  };
const activeTabColor=gray800;
const nonActiveTabColor=gray400;

  return (
    <View style={[styles.bottomView]}>
      <ItemCompo
        text="Home"
        active={activeTab == 'home'}
        handlerAction={handlers.home}>
        {<HomeSVG stroke={activeTab == 'home'?activeTabColor:nonActiveTabColor} height={styles.bottomIcon.height} width={styles.bottomIcon.width}/>}
      </ItemCompo>
      <ItemCompo
        text="Appointments"
        active={activeTab == 'appointments'}
        handlerAction={handlers.appointment}>
        {<AppointmentSVG stroke={activeTab == 'appointments'?activeTabColor:nonActiveTabColor}height={styles.bottomIcon.height} width={styles.bottomIcon.width} />}
      </ItemCompo>
      <ItemCompo
        text="Doctors"
        active={activeTab == 'doctors'}
        handlerAction={handlers.doctors}>
        {<DoctorSVG stroke={activeTab == 'doctors'?activeTabColor:nonActiveTabColor}height={styles.bottomIcon.height} width={styles.bottomIcon.width} />}
      </ItemCompo>
      <ItemCompo
        text="Notifications"
        active={activeTab == 'notifications'}
        handlerAction={handlers.notification}>
        {<NotificationSVG stroke={activeTab == 'notifications'?activeTabColor:nonActiveTabColor}height={styles.bottomIcon.height} width={styles.bottomIcon.width} />}
      </ItemCompo>
      <ItemCompo
        text="Profile"
        active={activeTab == 'profile'}
        handlerAction={handlers.profile}>
        {<ProfileSVG stroke={activeTab == 'profile'?activeTabColor:nonActiveTabColor}height={styles.bottomIcon.height} width={styles.bottomIcon.width} />}
      </ItemCompo>
    </View>
  );
};

export default CustomBottomTab;

const styles = ScaledSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5@s',
  },
  
  bottomView: {
    paddingHorizontal: '10@s',
    width: '100s%',
    height: '55@s',
    borderTopRightRadius: '10@s',
    borderTopLeftRadius: '10@s',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 6 }, // Offset for shadow position
    shadowOpacity: 0.2, // Shadow opacity (0 to 1)
    shadowRadius: 5, // Blurriness of shadow for iOS
    elevation: 5,
    borderColor: gray300,
    borderWidth: 0.19,
    position: 'absolute',
    bottom: '0@s',
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomIcon: {
    width: '21.5@s',
    height: '21.5@s',
    resizeMode: 'contain',
  },
  bottomText: {
    fontSize: '8@s',
    color: gray400,
    fontFamily:'Inter_18pt-Medium',
  },
});
