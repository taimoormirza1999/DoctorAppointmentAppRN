import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {AwesomeIcon} from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  absoluteComponentDirection,
  getTextAlignment,
  height,
  iconSizes,
} from '../constants/DimensionFontSizes';
import {
  disableInputStyle,
  inputStyle,
  labelStyle,
  primaryColor,
  rowDirectionDynamic,
  starikStyle,
} from '../constants/commonStyles';
import { gray300, gray400, gray500 } from '../constants/Colors';
import { scale } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
const Input = ({
  disable,
  handleIconAction,
  color,
  editable = true,
  placeholderText,
  labelText,
  passwordfield = false,
  value,
  onChangeText,
  currentLanguage,
  ImageIcon
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordIconName, setPasswordIconName] = useState('eye-slash');

  const togglePassword = async () => {
    setHidePassword(!hidePassword);
    setPasswordIconName(passwordIconName === 'eye' ? 'eye-slash' : 'eye');
  };

  return (
    <View style={styles.vpadding}>
      {labelText && (
        <View style={[styles.row, rowDirectionDynamic(currentLanguage), {}]}>
          <Text style={[labelStyle, {color: color}]}>{labelText}</Text>
          <Text style={starikStyle}>*</Text>
        </View>
      )}

      <TextInput
      outlineColor={gray300}
      activeOutlineColor={gray300}
      
      left={
        ImageIcon&&(
            <TextInput.Icon 
            icon={() => (
              <FastImage
                source={ImageIcon}
                resizeMode="contain"
                style={{ height: scale(22), width: scale(22) }} // Adjust height/width
              />
            )}
          />
        )
       
      }
        style={[
          inputStyle,
          styles.input,
          disable ? disableInputStyle : null,
          getTextAlignment(currentLanguage),
          {backgroundColor:'white', borderRadius:30},
        ]}
        outlineStyle={{borderRadius:scale(7)}}
        placeholderTextColor={gray400}
        mode="outlined"
        editable={editable}
        value={value}
        disabled={disable}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        secureTextEntry={true}
      />
      {disable ? (
        <TouchableOpacity
          onPress={handleIconAction}
          style={[
            styles.eyeIcon,
            absoluteComponentDirection(currentLanguage, 0, height * 0.05),
          ]}>
          <Feather
            name="edit-3"
            style={{fontSize: iconSizes.normal, color: primaryColor}}
          />
        </TouchableOpacity>
      ) : null}
      {passwordfield ? (
        <TouchableOpacity
          onPress={togglePassword}
          style={[
            styles.eyeIcon,
            absoluteComponentDirection(currentLanguage, 0, height * 0.05),
          ]}>
          <AwesomeIcon
            name={passwordIconName}
            style={{fontSize: iconSizes.normal, color: 'grey'}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  vpadding: {
    paddingBottom: 8,
  },
  input: {
    // marginVertical: inputPadding.Vertical,
  },
  row: {
    width: '100%',
    alignItems: 'center',
  },
  eyeIcon: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
