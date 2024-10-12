import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const SafeAreaWrapper = ({ children, style, backgroundColor, mode='dark' }) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.safeArea, style,{ backgroundColor: backgroundColor}]}>
      <StatusBar barStyle={mode=='light'?"light-content":'dark-content'} backgroundColor={backgroundColor} />
      <View style={styles.innerView}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure SafeAreaView takes up the entire screen
 // Set your background color here
  },
  innerView: {
    flex: 1, // Inner view also takes up available space
  },
});

export default SafeAreaWrapper;
