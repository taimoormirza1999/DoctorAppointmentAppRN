import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import CustomBottomTab from '../components/CustomBottomTab';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Categories from '../components/Categories';
import {width} from '../constants/DimensionFontSizes';
import DoctorCardVertical from '../components/DoctorCardVertical';
import {DoctorsImages} from '../constants/DoctorsImages';
import DoctorsList from '../components/DoctorsList';
const Home = ({navigation}) => {
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containe}>
            <Header title={'DoctorApp'} icon={require('../images/logo.png')} />
            <Image
              source={require('../images/banner.png')}
              style={styles.banner}
            />

            <View style={styles.section}>
              <Text style={styles.heading}>Categories</Text>
              <Categories />
              {/* <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#009FFD', '#2A2A72']}
                      style={styles.linearGradient}>
                      <Text style={styles.catName}>
                        {'Category ' + index + 1}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            /> */}
              {/* image, ratting, doctorName, category,location */}
            </View>
            <Text style={[styles.heading, styles.section]}>
              Top Rated Doctors
            </Text>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <DoctorsList navigation={navigation} />
              <View style={{flexDirection: 'row', width: '100%'}}></View>
              {/* <FlatList
                numColumns={2}
                data={[1, 1, 1, 1, 1, 1]}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.docItem}>
                      <Image
                        source={require('../images/doctor.png')}
                        style={styles.docImg}
                      />
                      <Text style={styles.docName}>Doctor {index + 1}</Text>
                      <Text style={styles.docSpl}>Skin Specialist</Text>
                      <Text
                        style={[
                          styles.status,
                          {
                            color: index / 2 == 0 ? 'green' : 'red',
                            opacity: index / 2 == 0 ? 1 : 0.5,
                          },
                        ]}>
                        {index / 2 == 0 ? 'Available' : 'Busy'}
                      </Text>
                      <CommonBtn
                        w={150}
                        h={40}
                        status={index / 2 == 0 ? true : false}
                        txt={'Book Appointment'}
                        onClick={() => {
                          if (index / 2 == 0) {
                            navigation.navigate('BookAppointment');
                          }
                        }}
                      />
                    </View>
                  );
                }}
              /> */}
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
