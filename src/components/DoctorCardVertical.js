import { Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {lightShadow, mediumShadow} from '../constants/Shadows';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import {gray500, gray600, gray800} from '../constants/Colors';
import {AlignSelf} from '../constants/commonStyles';
import FastImage from 'react-native-fast-image';
import LocationSVG from '../svgs/LocationSVG';
import StarSVG from '../svgs/StarSVG';


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
      <FastImage
  source={image}
  style={[styles.docImg, lightShadow]}
  resizeMode={FastImage.resizeMode.cover} // You can adjust the resizeMode as needed
/>
      <Text style={styles.docName}>{doctorName}</Text>
      <Text style={styles.docCat}>{category}</Text>
      <View style={[{flexDirection: 'row'}, AlignSelf, styles.locationView]}>
       
        <LocationSVG height={scale(13)} width={scale(13)}/>
        <Text style={styles.text}>
          {location.length > 15 ? location.substring(0, 15) + '...' : location}
        </Text>
      </View>
      <View style={[{flexDirection: 'row'}, AlignSelf, styles.reviewView]}>
    
        <StarSVG height={scale(13)} width={scale(13)}/>
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
    borderRadius: '10@s',
    alignSelf: 'center',
    paddingTop: 10,
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
    paddingHorizontal: '2%',
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
