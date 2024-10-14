import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {lightShadow, mediumShadow} from '../constants/Shadows';
import {scale, ScaledSheet} from 'react-native-size-matters';

import appointmentImage from '../images/Icons/Appointment.png';
import {gray200, gray300, gray400, gray600} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';
import AppointmentSVG from '../svgs/AppointmentSVG';
import HomeSVG from '../svgs/HomeSVG';
import DoctorSVG from '../svgs/DoctorSVG';
import ProfileSVG from '../svgs/ProfileSVG';
import NotificationSVG from '../svgs/NotificationSVG';
const ItemCompo = ({children, image, text, active, handlerAction}) => {
  return (
    <TouchableOpacity style={[styles.buttonWrapper]} onPress={handlerAction}>
      <View
        style={{
          padding: scale(7),
          backgroundColor: active ? gray200 : 'white',
          lightShadow,
          borderRadius: 50,
        }}>
        {children}
      </View>

      <Text style={styles.bottomText}>{text}</Text>
    </TouchableOpacity>
  );
};
const CustomBottomTab = ({activeTab, title, image, navigation}) => {
  const handlers = {
    home: () => navigation.navigate('Home'),
    appointment: () => navigation.navigate('MyAppointments'),
    doctors: () => navigation.navigate('AllDoctors'),
    notification: () => navigation.navigate('Notifications'),
    profile: () => navigation.navigate('Home'),
  };

  return (
    <View style={[styles.bottomView]}>
      <ItemCompo
        text="Home"
        active={activeTab == 'home'}
        handlerAction={handlers.home}>
        {<HomeSVG stroke={activeTab == 'home'?gray600:gray400}/>}
      </ItemCompo>
      <ItemCompo
        text="Appointments"
        active={activeTab == 'appointments'}
        handlerAction={handlers.appointment}>
        {<AppointmentSVG stroke={activeTab == 'appointments'?gray600:gray400}/>}
      </ItemCompo>
      <ItemCompo
        text="Doctors"
        active={activeTab == 'doctors'}
        handlerAction={handlers.doctors}>
        {<DoctorSVG stroke={activeTab == 'doctors'?gray600:gray400}/>}
      </ItemCompo>
      <ItemCompo
        text="Notifications"
        active={activeTab == 'notifications'}
        handlerAction={handlers.notification}>
        {<NotificationSVG stroke={activeTab == 'notifications'?gray600:gray400}/>}
      </ItemCompo>
      <ItemCompo
        text="Profile"
        active={activeTab == 'profile'}
        handlerAction={handlers.profile}>
        {<ProfileSVG stroke={activeTab == 'profile'?gray600:gray400}/>}
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
    paddingHorizontal: '10@s',
  },

  bottomView: {
    width: '100%',
    height: '55@s',
    borderTopRightRadius: '10@s',
    borderTopLeftRadius: '10@s',
    elevation: 5,
    borderColor: gray300,
    borderWidth: 0.19,
    position: 'absolute',
    bottom: '-1@s',
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomIcon: {
    width: '18@s',
    height: '18@s',
    resizeMode: 'contain',
  },
  bottomText: {
    fontSize: '9@s',
    fontWeight: 600,
    color: gray400,
  },
});
