import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {lightShadow, mediumShadow} from '../constants/Shadows';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import {gray500, gray600, gray800} from '../constants/Colors';
import {AlignSelf, justRow} from '../constants/commonStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import LocationSVG from '../svgs/LocationSVG';
import FastImage from 'react-native-fast-image';
import StarSVG from '../svgs/StarSVG';

const DoctorCardHorizontal = ({
  extraval1,
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
      <View style={styles.ImageSide}>
        <FastImage
          source={image}
          style={[styles.docImg, lightShadow]}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.TextSide}>
        <Text style={styles.docName}>{doctorName}</Text>
        <Text style={styles.docCat}>{category}</Text>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: scale(7),
              justifyContent: 'center',
            },
            styles.locationView,
          ]}>
          <LocationSVG width={scale(16)} height={scale(16)} strokeWidth={1.8} />
          <Text style={styles.text}>{location}</Text>
        </View>
        <View
          style={[
            justRow,
            {flex: 1, width: scale(100), height: '100%', marginLeft:scale(-7)},
            styles.reviewView,
          ]}>
          <Text style={styles.text}>{ratting} Reviews</Text>
          <StarSVG height={scale(13)} width={scale(13)} />
          <Text style={styles.text}>{reviews}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCardHorizontal;

const styles = ScaledSheet.create({
  docItem: {
    width: '95%',
    flexDirection: 'row',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
    borderRadius: '13@s',
    // borderWidth: 0.2,
    margin: '10@s',
    paddingVertical: '8@s',
  },
  ImageSide: {
    width: '35%',
  },
  TextSide: {
    // backgroundColor:'red',
    justifyContent: 'center',
    width: '65%',
    paddingLeft: '3%',
  },
  docImg: {
    width: '100%',
    height: width * 0.26,
    borderRadius: '7@s',
  },
  Icon: {
    width: '12@s',
    height: '12@s',
    resizeMode: 'contain',
  },
  docName: {
    width: '100%',
    fontSize: '14@s',
    fontWeight: '700',
    marginTop: '5@s',
    marginBottom: '5@s',
    color: gray800,
  },

  docCat: {
    fontSize: '12.5@s',
    marginVertical: '5@s',
    fontWeight: '600',
    color: gray600,
  },
  text: {
    width: '100%',
    fontSize: '10.5@s',
    marginLeft: '4@s',
    fontWeight: '600',
    color: gray500,
  },
  locationView: {
    marginVertical: '4@s',
  },
  reviewView: {
    marginVertical: '4@s',
  },
});
