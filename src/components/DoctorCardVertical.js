import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {lightShadow, mediumShadow} from '../constants/Shadows';
import {ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import {gray500, gray600, gray800} from '../constants/Colors';
import {AlignSelf} from '../constants/commonStyles';

const DoctorCardVertical = ({
  image,
  ratting,
  doctorName,
  category,
  location,
  reviews,
  handleAction,
}) => {
  return (
    <TouchableOpacity
      onPress={handleAction}
      style={[styles.docItem, mediumShadow]}>
      <Image source={image} style={[styles.docImg, lightShadow]} />
      <Text style={styles.docName}>{doctorName}</Text>
      <Text style={styles.docCat}>{category}</Text>
      <View style={[{flexDirection: 'row'}, AlignSelf, styles.locationView]}>
        <Image
          source={require('../images/Icons/Location.png')}
          style={styles.Icon}
        />
        <Text style={styles.text}>
          {location.length > 15 ? location.substring(0, 15) + '...' : location}
        </Text>
      </View>
      <View style={[{flexDirection: 'row'}, AlignSelf, styles.reviewView]}>
        <Image
          source={require('../images/Icons/Star-fill.png')}
          style={styles.Icon}
        />
        <Text style={styles.text}>{reviews}</Text>
        <Text style={styles.text}>{ratting} Reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCardVertical;

const styles = ScaledSheet.create({
  docImg: {
    width: '100%',
    height: width * 0.26,
    borderRadius: '7@s',
    alignSelf: 'center',
  },
  Icon: {
    width: '12@s',
    height: '12@s',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  docName: {
    width: '100%',
    textAlign: 'center',
    fontSize: '13@s',
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    color: gray800,
  },
  docItem: {
    width: '45%',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    paddingVertical: '6@s',
  },

  docCat: {
    width: '100%',
    textAlign: 'center',
    fontSize: '12.5@s',
    marginVertical: '5@s',
    fontWeight: '600',
    alignSelf: 'center',
    color: gray600,
  },
  text: {
    fontSize: '10.3@s',
    marginLeft: '4@s',
    fontWeight: '600',
    color: gray500,
    textAlign: 'center',
  },
  locationView: {
    marginVertical: '4@s',
  },
  reviewView: {
    marginVertical: '4@s',
  },
});