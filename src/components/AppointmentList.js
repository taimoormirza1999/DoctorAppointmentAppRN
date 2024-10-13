import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { DoctorsImages } from '../constants/DoctorsImages';
// import { FlatList } from 'react-native-gesture-handler';
import DoctorCardVertical from './DoctorCardVertical';
import DoctorCardHorizontal from './DoctorCardHorizontal';
import AppointmentCardHorizontal from './AppointmentCardHorizontal';

const AppointmentList = ({navigation}) => {
    const doctorsData = [
        {
          image: DoctorsImages.doctor7,
          rating: "5",
          reviews: "1,872",
          doctorName: "Dr. David Patel",
          category: "Cardiologist",
          location: "Cardiology Center, USA",
        },
        {
          image: DoctorsImages.doctor5,
          rating: "4.9",
          reviews: "127",
          doctorName: "Dr. Jessica Turner",
          category: "Gynecologist",
          location: "Women's Clinic, Seattle, USA",
        },
        {
          image: DoctorsImages.doctor3,
          rating: "5",
          reviews: "5,223",
          doctorName: "Dr. Michael Johnson",
          category: "Orthopedic Surgery",
          location: "Maple Associates, NY, USA",
        },
        {
          image: DoctorsImages.doctor4,
          rating: "4.6",
          reviews: "405",
          doctorName: "Dr. Emily Walker",
          category: "Pediatrics",
          location: "Serenity Pediatrics Clinic, USA",
        },
      ];
      const handleAction=()=>{
        navigation.navigate("DoctorsDetails",)
      }
  return (
    <View style={{flexDirection:'row', width:'100%'}}>
     <FlatList
      data={doctorsData}
      
      keyExtractor={(item, index) => index.toString()} // Unique key for each item
      renderItem={({ item }) => (
        // <DoctorCardVertical
        //   image={item.image}
        //   rating={item.rating}
        //   reviews={item.reviews}
        //   doctorName={item.doctorName}
        //   category={item.category}
        //   location={item.location}
        //   handleAction={handleAction}
        // />
        <AppointmentCardHorizontal
          image={item.image}
          rating={item.rating}
          reviews={item.reviews}
          doctorName={item.doctorName}
          category={item.category}
          location={item.location}
          handleAction={handleAction}
        />
        // <Text>GG</Text>
    
      )}
      numColumns={1}
      ListFooterComponent={()=>{
        return <View style={{height:70}}></View> 
      }}
    />
    </View>
  )
}

export default AppointmentList

const styles = StyleSheet.create({})