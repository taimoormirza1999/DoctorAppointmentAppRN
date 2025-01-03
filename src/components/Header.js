import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, icon}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Splash');
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        underlayColor="#ffffff00"
        onPress={handleBack}>
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 10}]}>{title}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
  },
  back: {
    width: 24,
    height: 24,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
