import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {DoctorsImages} from '../constants/DoctorsImages';
import DoctorCardVertical from './DoctorCardVertical';
import DoctorCardHorizontal from './DoctorCardHorizontal';
import {AnimatedWrapper} from '../constants/AnimationEntering';
import {width} from '../constants/DimensionFontSizes';
import { Text } from 'react-native-paper';

const HospitalList = ({doctorsData, navigation, type = 'vertical'}) => {
  const handleAction = selectedDoctor => {
    navigation.navigate('DoctorsDetails', {selectedDoctor: selectedDoctor});
  };
  return (
   
    // <ScrollView horizontal={true} style={{width:'100%'} } alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false} >
    //   {doctorsData.map((item, index) => {
    //     return (
    //       <View style={{width: width*0.8,}} key={index}> 
    //         <DoctorCardHorizontal
    //           image={item.image}
    //           rating={item.rating}
    //           reviews={item.reviews}
    //           doctorName={item.hospitalName}
    //           category={item.category}
    //           location={item.location}
    //           handleAction={() => handleAction(item)}
    //         />
    //       </View>
        
    //     );
    //   })}
    // </ScrollView>
    <ScrollView horizontal={true} style={{width:'100%'}}>
      {doctorsData.map((item, index) => {
        return (
          <View style={{width:width*0.8}} key={index}>
          
       <DoctorCardHorizontal
            image={item.image}
            rating={item.rating}
            reviews={item.reviews}
            doctorName={item.doctorName}
            category={item.category}
            location={item.location}
            handleAction={() => handleAction(item)}
            />
       </View>
        
        );
      })}
    </ScrollView>
  );
};

export default HospitalList;
