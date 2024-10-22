import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Blue,
  gray300,
  gray50,
  gray500,
  primaryDarkColor,
} from '../constants/Colors';
import {justRow, w100} from '../constants/commonStyles';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {AnimatedWrapper} from '../constants/AnimationEntering';
import Button from '../components/Button';

const SigninBottomButtons = ({
  primaryButtonText,
  handlePrimary,
  handleSecondary,
  handleTernary,
  botomText,
  botomLinkText,
}) => {
  return (
    <View>
      <AnimatedWrapper
        style={[w100, {alignItems: 'center', marginVertical: scale(10)}]}>
        <Button
          paddingVerical={scale(13)}
          width="100%"
          text={primaryButtonText}
          handleNext={handlePrimary}
        />
      </AnimatedWrapper>
      <View>
        <View
          style={[
            justRow,
            w100,
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: scale(4),
            },
          ]}>
          <View style={styles.line}></View>
          <Text style={styles.TextOr}>or</Text>
          <View style={styles.line}></View>
        </View>
      </View>
      <AnimatedWrapper style={[w100, {alignItems: 'center'}]}>
        <Button
          backgroundColor={gray50}
          color={primaryDarkColor}
          width="100%"
          text={'Continue with Google'}
          handleNext={handleSecondary}
          logoButton={true}
          logoUrl={require('../images/Google.png')}
        />
      </AnimatedWrapper>
      <Text style={styles.botomText}>
        {botomText}{' '}
        <Pressable onPress={handleTernary}>
          <Text style={styles.linkText}>{botomLinkText}</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default SigninBottomButtons;

const styles = ScaledSheet.create({
  line: {
    width: '40%',
    height: '1@s',
    backgroundColor: gray300,
    marginVertical: '15@s',
  },

  TextOr: {
    fontSize: '13@s',
    fontWeight: '500',
    marginBottom: 10,
    color: gray500,
    textAlign: 'center',
  },
  botomText: {
    fontSize: '13@s',
    marginBottom: 10,
    color: gray500,
    textAlign: 'center',
    marginTop: '25@s',
    fontWeight: '500',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    textAlignVertical: 'center',
    color: Blue,
    fontWeight: '700',
  },
});
