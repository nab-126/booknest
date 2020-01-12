import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Markers from '../constants/markers'

import Header from '../components/Header'

export default class MapScreen extends React.Component {
  render() {
    return (
      <View flex={1}>
        <Header navigation={this.props.navigation} title='Map'/>
        <MapView
         style={styles.mapStyle}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: -20.276462,
         longitude: 57.564947,
         latitudeDelta: 0.75,
         longitudeDelta: 0.6}}
        >
        <Markers/>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 30,
    color: 'black'
  },
  mapStyle: {
    flex: 1
  },
});