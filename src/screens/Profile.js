import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import HeaderTitle from '../components/HeaderTitle';
import CustomBottomTab from '../components/CustomBottomTab';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Avatar, useTheme } from 'react-native-paper';
import { lightShadow, mediumShadow } from '../constants/Shadows';
import { gray300, primaryDarkColor } from '../constants/Colors';
import { fontSizes, width } from '../constants/DimensionFontSizes';
import { containerStyles, w100 } from '../constants/commonStyles';
import { scale } from 'react-native-size-matters';
import Input from '../components/Input';
import Button from '../components/Button';
import { AnimatedWrapper } from '../constants/AnimationEntering';
import FastImage from 'react-native-fast-image';

const Profile = ({navigation}) => {
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
    
      <View style={containerStyles}>
      <KeyboardAwareScrollView style={[{},containerStyles]}>
      <HeaderTitle  title={'Profile'} navigation={navigation} goHome={true}/>
      <View style={[{ alignItems: 'center',   }]}>
            <FastImage  resizeMode={FastImage.resizeMode.contain}  style={{ width: width * 0.39, height: width * 0.39 }} source={"users.gender" != 'male' && require('../images/profile-circle.png') } />
            {/* <Text style={{ fontSize:fontSizes.medium, textAlign: "center", marginVertical: scale(10) }}>{"users.firstname" + " " + "users.lastname"} </Text>
            <Text style={{ fontSize: fontSizes.medium, textAlign: "center", color: gray300 }}>{"users.email"}</Text> */}
          </View>
          <View style={{flex: 0.8, width: '100%', height: '100%'}}>
        <View style={{marginVertical: scale(5)}}>
          
        </View>
        <Input
          placeholderText={'Your Name'}
          
        />
        <Input
          placeholderText={'Your Email'}
          
        />
        <Input
          placeholderText={'Password'}
         
        />
        <Input
          placeholderText={'Date of Birth'}
         
        />
        <Input
          placeholderText={'Gender'}
         
        />
        <AnimatedWrapper
        style={[w100, {alignItems: 'center', marginVertical: scale(10)}]}>
        <Button
          paddingVerical={scale(13)}
          width="100%"
          text={"Save"}
          handleNext={()=>{}}
        />
      </AnimatedWrapper>
        </View>
        </KeyboardAwareScrollView>
        <CustomBottomTab activeTab={'profile'} navigation={navigation} />
      </View>

    </SafeAreaWrapper>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    padding: 5,
    color: 'orange',
  },
});
