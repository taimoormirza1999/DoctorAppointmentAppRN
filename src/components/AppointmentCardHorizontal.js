import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {cardShadow, lightShadow, mediumShadow} from '../constants/Shadows';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import {
  gray100,
  gray200,
  gray300,
  gray500,
  gray600,
  gray800,
  primaryDarkColor,
} from '../constants/Colors';
import {AlignSelf, headings, justRow, w100} from '../constants/commonStyles';
import LocationSVG from '../svgs/LocationSVG';
import FastImage from 'react-native-fast-image';
import Button from '../components/Button';

const AppointmentCardHorizontal = ({
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
    <View style={[{flex: 1}, styles.cardItem, cardShadow,{}]}>
      <Text style={[headings.h3, styles.dateText]}>
        May 22, 2023 - 10.00 AM
      </Text>
      <View style={[styles.docItem]}>
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
          <View style={[{flexDirection: 'row'}, styles.locationView]}>
            <LocationSVG
              width={scale(17)}
              height={scale(17)}
              strokeWidth={1.8}
            />
            <Text style={styles.text}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={[justRow, w100, AlignSelf, {paddingTop: scale(7)}]}>
        <Button
          text={'Cancel'}
          handleNext={() => {}}
          paddingVerical={scale(10)}
          width={'47%'}
          backgroundColor={gray300}
          color={primaryDarkColor}
          noShadow={true}
        />

        <Button
          text={'Reschedule'}
          handleNext={() => {}}
          paddingVerical={scale(10)}
          width={'47%'}
          noShadow={true}
          marginLeft={scale(10)}
        />
      </View>
    </View>
  );
};

export default AppointmentCardHorizontal;

const styles = ScaledSheet.create({
  cardItem: {
    paddingVertical: '15@s',
    marginVertical: '5@s',
    paddingHorizontal: '13@s',
    borderRadius: '13@s',
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:gray200,
  
  },
  docItem: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: '4@s',
  },
  ImageSide: {
    width: '35%',
  },
  TextSide: {
    justifyContent: 'center',
    width: '50%',
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
    fontSize: '14@s',
    fontWeight: '700',
    marginTop: '5@s',
    marginBottom: '5@s',
    color: gray800,
  },
dateText:{
 marginBottom: '5@s',
  fontSize: 
  scale(12.5)
},

  docCat: {
    fontSize: '13@s',
    marginVertical: '5@s',
    fontWeight: '600',
    color: gray600,
  },
  text: {
    width: '100%',
    fontSize: '11.5@s',
    marginLeft: '4@s',
    fontWeight: '600',
    color: gray500,
  },
  locationView: {
    marginVertical: '4@s',
  },
});
