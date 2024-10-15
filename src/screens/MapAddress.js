import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { UserContext } from '../components/context/UserContext';
import { primaryDarkColor } from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';  // Importing Ionicons from React Native Vector Icons
import { iconSizes } from '../constants/DimensionFontSizes';

const MapAddress = ({ navigation }) => {  // Assuming you're using React Navigation for navigation
  const [address, setAddress, requestLocationPermission] = useContext(UserContext);

  const [selectedLocation, setSelectedLocation] = useState({
    latitude: address.latitude,
    longitude: address.longitude,
  });

  // Update the map marker when the address changes (current location is fetched)
  useEffect(() => {
    if (address.latitude && address.longitude) {
      setSelectedLocation({
        latitude: address.latitude,
        longitude: address.longitude,
      });
    }
  }, [address]);

  // Handle location picker on map press
  const handleLocationPick = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
    setAddress({ ...address, latitude, longitude });
  };

  // Handle back navigation
  const handleBackPress = () => {
    navigation.goBack();  // Go back to the previous screen
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon name="return-up-back" size={iconSizes.normal} color="#fff" />
      </TouchableOpacity>

      {/* Button to fetch current location */}
      <TouchableOpacity style={styles.locationButton} onPress={requestLocationPermission}>
        <Icon name="location" size={iconSizes.normal} color="#fff" />
        <Text style={styles.buttonText}>Find my Current Location</Text>
      </TouchableOpacity>

      {/* MapView with location picker */}
      <MapView
        initialRegion={{
          latitude: selectedLocation.latitude || 37.78825,
          longitude: selectedLocation.longitude || -122.4324,
          latitudeDelta: 0.0926,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
        onPress={handleLocationPick}
      >
        {address.latitude && address.longitude && (
          <Marker
            coordinate={{
              latitude: address.latitude,
              longitude: address.longitude,
            }}
            title="Your Location"
            description={address.fullAddress || "This is your current location"}
            pinColor={'red'}
   
          />
        )}

        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title="Picked Location"
            pinColor="red"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapAddress;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    backgroundColor: primaryDarkColor,
    padding: 10,
    borderRadius: 50,
  },
  locationButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: primaryDarkColor,
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
});
