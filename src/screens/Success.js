import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SuccessSVG from '../svgs/SuccessSVG';
import Button from '../components/Button';
import {AlignSelf, body, headings, w70, w80} from '../constants/commonStyles';
import {scale, ScaledSheet} from 'react-native-size-matters';

const Success = ({navigation}) => {
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
          {
            'Your appointment with Dr. David Patel is confirmed for Oct 30, 2024, at 10:00 AM.!'
          }
        </Text>
        <View style={[AlignSelf, {width: '100%', alignItems: 'center'}]}>
          <Button
            text={'Done'}
            handleNext={() => {
              navigation.navigate('Home');
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
