import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import {DoctorsImages} from '../constants/DoctorsImages';
import DoctorCardVertical from './DoctorCardVertical';
import DoctorCardHorizontal from './DoctorCardHorizontal';
import NotificationCardHorizontal from './NotificationCardHorizontal';
import { scale } from 'react-native-size-matters';

const NotificationList = ({navigation, type = 'vertical'}) => {
  const notificationData1 = [
    {
      status: 'tick',
      title: 'Appointment Success',
      description:
        'You have successfully booked your appointment with Dr. Emily Walker.',
      time: '1h',
    },
    {
      status: 'cancelled',
      title: 'Appointment Cancelled',
      description:
        'You have successfully cancelled your appointment with Dr. David Patel.',
      time: '2h',
    },
    {
      status: 'reschdule',
      title: 'Scheduled Changed',
      description:
        'You have successfully changes your appointment with Dr. Jesica Turner.',
      time: '8h',
    },
  ];
  const notificationData2 = [
    {
      status: 'tick',
      title: 'Appointment Success',
      description:
        'You have successfully booked your appointment with Dr. David Patel.',
      time: '1d',
    },
   
  ];
  const handleAction = () => {
    navigation.navigate('DoctorsDetails');
  };
  return (
    <View style={{}}>
      <Text> TODAY</Text>
      <FlatList
        data={notificationData1}
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        renderItem={({item}) => (
          <NotificationCardHorizontal
            status={item.status}
            title={item.title}
            description={item.description}
            time={item.time}
            handleAction={handleAction}
          />
        )}
       
        ListFooterComponent={() => {
          return <View style={{height: scale(0)}}></View>;
        }}
      />
      <Text> YESTERDAY</Text>
      <FlatList
        data={notificationData2}
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        renderItem={({item}) => (
          <NotificationCardHorizontal
            status={item.status}
            title={item.title}
            description={item.description}
            time={item.time}
            handleAction={handleAction}
          />
        )}
       
        ListFooterComponent={() => {
          return <View style={{height: scale(120)}}></View>;
        }}
      />
    </View>
  );
};

export default NotificationList;
