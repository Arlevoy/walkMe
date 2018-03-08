import { AppRegistry, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

import React, { Component } from 'react';

export default class MapTourScreen extends Component {
  static navigationOptions = { title: 'MapTourScreen' };

  render() {
    return (
      <View style={styles.tourMapContainer}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 41.0082,
              longitude: 28.9784,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Description</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tourMapContainer: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
