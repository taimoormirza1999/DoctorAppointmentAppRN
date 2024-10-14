import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {lightShadow, mediumShadow} from '../constants/Shadows';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import {gray500, gray600, gray800} from '../constants/Colors';
import {AlignSelf, justRow, w100} from '../constants/commonStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import LocationSVG from '../svgs/LocationSVG';
import FastImage from 'react-native-fast-image';
import CalendarTickSVG from '../svgs/CalendarTickSVG';
import CalendarCancelSVG from '../svgs/CalendarCancelSVG';
import CalendarEditSVG from '../svgs/CalendarEditSVG';

const NotificationCardHorizontal = ({
  status,
  title,
  time,
  description,
  handleAction,
}) => {
  return (
    <TouchableOpacity
      onPress={handleAction}
      style={[styles.docItem]}>
      <View style={styles.ImageSide}>
        {
          status=='tick' ?  <CalendarTickSVG
          width={scale(50)}
          height={scale(50)}
          strokeWidth={1.8}
        /> :
        status=='cancelled' ?
        <CalendarCancelSVG 
         width={scale(50)}
        height={scale(50)}
        strokeWidth={1.8}/>
        :
        <CalendarEditSVG  width={scale(50)}
        height={scale(50)}
        strokeWidth={1.8}/>
        }
       
      </View>
      <View style={[styles.TextSide, ]}>
        <View style={[justRow,w100,{justifyContent: 'space-between',flex:1}]}>
          <Text style={styles.docName}>{title}</Text>
          <Text style={styles.docCat}>{time}</Text>
        </View>

        <Text style={styles.text}>
         {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCardHorizontal;

const styles = ScaledSheet.create({
  docItem: {
    width: '95%',
    flexDirection: 'row',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
    borderRadius: '10@s',
    // borderWidth: 0.2,
    marginHorizontal: '10@s',
    marginVertical:'5@s',
    paddingVertical: '10@s',
    paddingHorizontal: '7@s',
  },
  ImageSide: {
    width: '20%',
  },
  TextSide: {
    justifyContent: 'center',
    width: '80%',
    paddingLeft: '3%',
  },

  docName: {
    fontSize: '13.5@s',
    fontWeight: '700',
    marginTop: '5@s',
    marginBottom: '5@s',
    color: gray800,
  },

  docCat: {
    fontSize: '11.5@s',
    marginVertical: '5@s',
    color: gray600,
  },
  text: {
    width: '100%',
    fontSize: '12@s',
    color: gray500,
  },

});
