import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashCard from './SplashCard';
import {
  SplashCardStyles,
  TestingHighLighter,
} from '../../constants/commonStyles';
import {width} from '../../constants/DimensionFontSizes';

const SplashCardRow = ({item}) => {
  return (
    <View style={[{flex: 1, flexDirection: 'row'}]}>
      <View style={{flex: 0.3}}>
        {item['position1']?.color ? (
          <View
            style={[
              SplashCardStyles,
              {backgroundColor: item['position1'].color},
            ]}
          />
        ) : (
          <SplashCard image={item['position1'].image} />
        )}
      </View>

      <View style={{flex: 0.5, marginHorizontal: width * 0.03, zIndex: 99999}}>
        {item['position2']?.color ? (
          <View
            style={[
              SplashCardStyles,
              {
                backgroundColor: item['position2'].color,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              },
            ]}>
            
          </View>
        ) : (
          <SplashCard image={item['position2'].image} />
        )}
      </View>
      <View style={{flex: 0.3}}>
        {item['position3']?.color ? (
          <View
            style={[
              SplashCardStyles,
              {backgroundColor: item['position3'].color},
            ]}
          />
        ) : (
          <SplashCard image={item['position3'].image} />
        )}
      </View>
    </View>
  );
};

export default SplashCardRow;

const styles = StyleSheet.create({});
