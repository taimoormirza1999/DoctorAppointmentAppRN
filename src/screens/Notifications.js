import { ScrollView, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import DoctorsList from '../components/DoctorsList';
import CustomBottomTab from '../components/CustomBottomTab';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import HeaderTitle from '../components/HeaderTitle';
import { containerStyles, headingCommonStyle, headings, sectionSeprator } from '../constants/commonStyles';
import NotificationList from '../components/NotificationList';

const Notifications = ({navigation}) => {
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
      <View style={containerStyles}>
        <ScrollView
          style={containerStyles}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containe}>
            <HeaderTitle title="Notification" navigation={navigation}/>
           
            <View style={{marginTop: scale(15), alignItems: 'center',}}>
              <NotificationList navigation={navigation} type='horizontal'/>
              <View style={{flexDirection: 'row', width: '100%'}}></View>
            </View>
          </View>
        </ScrollView>
        <CustomBottomTab activeTab={'notifications'} navigation={navigation} />
      </View>
    </SafeAreaWrapper>
  );
};

export default Notifications;

const styles = ScaledSheet.create({
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
