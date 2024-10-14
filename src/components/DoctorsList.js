import { StyleSheet, View,FlatList } from 'react-native'
import React from 'react'
import { DoctorsImages } from '../constants/DoctorsImages';
import DoctorCardVertical from './DoctorCardVertical';
import DoctorCardHorizontal from './DoctorCardHorizontal';

const DoctorsList = ({doctorsData,navigation, type="vertical"}) => {
    
      const handleAction=()=>{
        navigation.navigate("DoctorsDetails",)
      }
  return (
    <View style={{flexDirection:'row', width:'100%'}}>
     <FlatList
      data={doctorsData}
      
      keyExtractor={(item, index) => index.toString()} // Unique key for each item
      renderItem={({ item }) => (
        type=="vertical"?
        <DoctorCardVertical
          image={item.image}
          rating={item.rating}
          reviews={item.reviews}
          doctorName={item.doctorName}
          category={item.category}
          location={item.location}
          handleAction={handleAction}
        />:
        <DoctorCardHorizontal
          image={item.image}
          rating={item.rating}
          reviews={item.reviews}
          doctorName={item.doctorName}
          category={item.category}
          location={item.location}
          handleAction={handleAction}
        />    
      )}
      numColumns={ type=="vertical"?2:1}
      ListFooterComponent={()=>{
        return <View style={{height:70}}></View> 
      }}
    />
    </View>
  )
}

export default DoctorsList

