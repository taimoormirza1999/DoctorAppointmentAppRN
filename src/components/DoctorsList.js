import { View,FlatList } from 'react-native'
import React from 'react'
import DoctorCardVertical from './DoctorCardVertical';
import DoctorCardHorizontal from './DoctorCardHorizontal';
import { AnimatedWrapper } from '../constants/AnimationEntering';

const DoctorsList = ({doctorsData,navigation, type="vertical", order, start=0,limit=6,bottomHeight}) => {
    
      const handleAction=(selectedDoctor)=>{
        navigation.navigate("DoctorsDetails",{selectedDoctor:selectedDoctor})
      }
  return (
    <AnimatedWrapper style={{flexDirection:'row', width:'100%'}}>
     <FlatList
      data={order=='reverse'?[...doctorsData].reverse().slice(start, limit):doctorsData.slice(start, limit)}
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
          handleAction={()=>handleAction(item)}
        />:
        <DoctorCardHorizontal
          image={item.image}
          rating={item.rating}
          reviews={item.reviews}
          doctorName={item.doctorName}
          category={item.category}
          location={item.location}
          handleAction={()=>handleAction(item)}
        />    
      )}
      numColumns={ type=="vertical"?2:1}
      ListFooterComponent={()=>{
        return <View style={{height:bottomHeight?bottomHeight:70}}></View> 
      }}
    />
    </AnimatedWrapper>
  )
}

export default DoctorsList

