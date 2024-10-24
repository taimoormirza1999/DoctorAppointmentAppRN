import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import SuccessSVG from '../svgs/SuccessSVG';
import Button from '../components/Button';
import {AlignSelf, body, headings, w80} from '../constants/commonStyles';
import {ScaledSheet} from 'react-native-size-matters';
import {displayNotification} from '../utils/notifications';
import { AllDoctorsData } from '../constants/data';

const Success = ({navigation, route}) => {
  const selectedDate = route.params?.selectedDate || null;
  const formattedDate = null;
  useEffect(() => {
    if (route.params?.doctorName) {
      const docotorMedia = route.params.docotorMedia;
      displayNotification(
        'Appointment Confirmed!',
        `Your appointment with ${
          route.params?.doctorName
        } is confirmed on ${formatDate(new Date(selectedDate || null))}, at ${
          route.params?.selectedSlot
        }!`,
        docotorMedia,
      );
      console.log(route.params.docotorMedia)
    }
  }, [route.params?.doctorName]);
  const formatDate = date => {
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  return (
    <View style={styles.container}>
      {/* <Image source={require('../images/checked.png')} style={styles.success} /> */}
      <View style={[w80]}>
        <View style={AlignSelf}>
          <SuccessSVG />
        </View>
        <Text style={[styles.textHeading, AlignSelf, headings.h2]}>
          {'Congratulations!'}
        </Text>
        <Text style={[styles.textMesage, AlignSelf, body.bodySRegular]}>
          {`Your appointment with ${
            route.params?.doctorName
          } is confirmed on ${formatDate(new Date(selectedDate || null))}, at ${
            route.params?.selectedSlot
          }!`}
        </Text>
        <View style={[AlignSelf, {width: '100%', alignItems: 'center'}]}>
          <Button
            text={'Done'}
            handleNext={() => {
              navigation.navigate('MyAppointments');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Success;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // width:'75%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ' rgba(255,255,255,1)',
  },

  textHeading: {
    marginVertical: '12@s',
  },
  textMesage: {
    // fontSize: 16,
    // fontWeight: '700',
    marginTop: '7@s',
    textAlign: 'center',
    marginBottom: '15@s',
  },
});
