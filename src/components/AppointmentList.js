import { StyleSheet, View,FlatList } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-gesture-handler';
import AppointmentCardHorizontal from './AppointmentCardHorizontal';
import { AnimatedWrapper } from '../constants/AnimationEntering';
import { Text } from 'react-native-paper';

const AppointmentList = ({navigation, doctorsData}) => {
   
      const handleAction=()=>{
        navigation.navigate("DoctorsDetails",)
      }
  return (
    <AnimatedWrapper style={{flexDirection:'row', width:'100%'}}>
     <FlatList
      data={doctorsData.reverse()} 
      keyExtractor={(item, index) => index.toString()} // Unique key for each item
      renderItem={({ item }) => (
        <AppointmentCardHorizontal
          image={item.image}
          doctorName={item.doctorName}
          time={item.time}
          category={item.category}
          location={item.location}
          handleAction={handleAction}
        />    
      )}
      numColumns={1}
      ListEmptyComponent={()=>{

        return <View style={{height:70}}>
          <Text>No Appointment Schduled!</Text>
        </View> 

      }}
      ListFooterComponent={()=>{
        return <View style={{height:70}}></View> 
      }}
    />
    </AnimatedWrapper>
  )
}

export default AppointmentList

const styles = StyleSheet.create({})