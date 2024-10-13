import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';
import HeaderTitle from '../components/HeaderTitle';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import CustomBottomTab from '../components/CustomBottomTab';
import {Calendar} from 'react-native-calendars';
import {gray200, primaryDarkColor} from '../constants/Colors';
import {AlignSelf, headings, sectionSeprator} from '../constants/commonStyles';
import {lightShadow} from '../constants/Shadows';
import TimeSlot from '../components/TimeSlot';
import Button from '../components/Button';
import { scale, ScaledSheet } from 'react-native-size-matters';

let DaysList = [];
const BookAppointment = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const [timeSlotStates, setTimeSlotStates] = useState([
    {text: '09:00 AM', fill: false},
    {text: '09:30 AM', fill: false},
    {text: '10:00 AM', fill: false},
    {text: '10:30 AM', fill: false},
    {text: '11:00 AM', fill: false},
    {text: '11:30 AM', fill: false},
    {text: '03:00 PM', fill: false},
    {text: '03:30 PM', fill: false},
    {text: '04:00 PM', fill: false},
    {text: '04:30 PM', fill: false},
    {text: '05:00 PM', fill: false},
    {text: '05:30 PM', fill: true},
  ]);
  const today = new Date();
  const SixDaysLater = new Date(today);
  SixDaysLater.setDate(SixDaysLater.getDate() + 3);

  const sixDaysLaterDate = SixDaysLater.toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(sixDaysLaterDate);

  const [days, setDays] = useState([]);

  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);
  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };

  const handleTimeSlotPress = index => {
    const newTimeSlotStates = timeSlotStates.map((slot, i) => ({
      ...slot,
      fill: i === index ? !slot.fill : false,
    }));
    setTimeSlotStates(newTimeSlotStates);
    setSelectedSlot(timeSlotStates[index]?.text);
  };

  return (
    <SafeAreaWrapper backgroundColor={'white'}>
     <ScrollView>
     <HeaderTitle title={'Book Appointment'} navigation={navigation} />
      <View style={styles.container}>
        <View style={[styles.compoCard, AlignSelf, sectionSeprator,{width: '100%'}]}>
          <Text style={[headings.h1,styles.headingStyle,]}>Select Date</Text>
          <Calendar
            theme={{
              backgroundColor: 'white',
              calendarBackground: 'white',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: primaryDarkColor,
              selectedDayTextColor: '#ffffff',
              todayTextColor: primaryDarkColor,
              dayTextColor: '#2d4150',
              textDisabledColor: gray200,
              arrowColor: primaryDarkColor,
            }}
            style={[
              lightShadow,
              {
                width: '100%',
                borderWidth: 0.05,
                borderColor: 'gray',
                borderRadius: 10,
              },
            ]}
            onDayPress={onDayPress}
            hideArrows={false}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: primaryDarkColor,
                selectedDotColor: 'primaryDarkColor',
              },
            }}
          />
        </View>
       <View style={sectionSeprator}>
       <Text style={[headings.h1,styles.headingStyle, {alignSelf:'flex-start'}]}>Select Hours</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          {timeSlotStates.map((slot, index) => (
            <TimeSlot
              key={index}
              text={slot.text}
              sColor={primaryDarkColor}
              // b2lColor={blues2_light}
              fill={slot.fill}
              onPress={() => handleTimeSlotPress(index)}
            />
          ))}
        </View>
       </View>
      <View style={[AlignSelf, {width: '100%', alignItems: 'center',marginBottom:scale(10)},]}>
          <Button
            text={'Done'}
            handleNext={() => {
              navigation.navigate('Success');
            }}
          />
        </View>
      </View>
     </ScrollView>
    
      {/* <CustomBottomTab activeTab={''} navigation={navigation} /> */}
    </SafeAreaWrapper>
  );
};

export default BookAppointment;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },

  headingStyle: {
    marginTop: '5@s',
    marginBottom: '16@s',
  },


  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
 
});
