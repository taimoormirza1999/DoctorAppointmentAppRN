import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {mediumShadow} from '../constants/Shadows';
import Button from '../components/Button';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Input from '../components/Input';
import FastImage from 'react-native-fast-image';
import {width} from '../constants/DimensionFontSizes';
import LogoVertical from '../components/LogoVertical';
import {AnimatedWrapper} from '../constants/AnimationEntering';
import {justRow, rowDirectionDynamic, w100} from '../constants/commonStyles';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {
  Blue,
  gray200,
  gray300,
  gray50,
  gray500,
  primaryDarkColor,
} from '../constants/Colors';
import SigninBottomButtons from '../components/SigninBottomButtons';
const SignIn = ({navigation}) => {
  const handleSignUp=()=>{
    return navigation.navigate('SignUp')
  }
  const handleLogin=()=>{
    return navigation.navigate('SignUp')
  }
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(response)
      if(response.data.idToken) {
        navigation.navigate('Home')
      }
      // if (isSuccessResponse(response)) {
      //   setState({userInfo: response.data});
      // } else {
      //   // sign in was cancelled by user
      // }
    } catch (error) {
      console.log(error)
      // if (isErrorWithCode(error)) {
      //   switch (error.code) {
      //     case statusCodes.IN_PROGRESS:
      //       // operation (eg. sign in) already in progress
      //       break;
      //     case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
      //       // Android only, play services not available or outdated
      //       break;
      //     default:
      //       navigation.navigate('Home')
      //     // some other error happened
      //   }
      // } else {
      //   // an error that's not related to google sign in occurred
      // }
    }
  };
  return (
    <View style={styles.container}>
      <LogoVertical />
      <View style={{flex: 0.8, width: '85%', height: '100%'}}>
        <View style={{marginBottom: scale(10)}}>
          <Text style={styles.TextHeading}>Hi, Welcome</Text>
          <Text style={styles.TextSubHeading}>Hope you’re doing fine.</Text>
        </View>
        <Input
          placeholderText={'Your Email'}
          ImageIcon={require('../images/sms.png')}
        />
        <Input
          placeholderText={'Password'}
          ImageIcon={require('../images/lock.png')}
        />
 <SigninBottomButtons primaryButtonText='Sign In' handlePrimary={handleLogin} handleSecondary={signIn}
     handleTernary={handleSignUp}
     botomText={"Don’t have an account yet ?"}
     botomLinkText={"Sign up"}
      />
       
      </View>
    </View>
  );
};

export default SignIn;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextHeading: {
    marginTop: '22@s',
    marginVertical: '13@s',
    fontSize: '25@s',
    fontWeight: 'bold',
    color: primaryDarkColor,
    textAlign: 'center',
  },
  TextSubHeading: {
    fontSize: '13@s',
    fontWeight: '500',
    marginBottom: 10,
    color: gray500,
    textAlign: 'center',
  },
 
});
