import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
//import { Marker } from "react-native-maps";
export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {


    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 20.6343531,
            longitude: -103.4078479,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >

          <Marker coordinate={
            {
              latitude: 20.632207,
              longitude: -103.398125,
            
            }} />

        </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
