import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { color } from '../../constants';
import MapView from 'react-native-maps';

import React, { Component } from 'react';

export default class MapTourScreen extends Component {
  static navigationOptions = { title: 'MapTourScreen' };

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => {
        console.warn(error);
        this.setState({ error: error.message });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const { latitude, longitude } = this.state;
    return !latitude || !longitude ? (
      <ActivityIndicator size="large" color={color.lightGreen} />
    ) : (
      <View style={styles.tourMapContainer}>
        <View style={styles.mapContainer}>
          <MapView
            provider="google"
            showsUserLocation
            showsCompass
            followsUserLocation
            showsPointsOfInterest
            style={styles.map}
            region={{
              latitude,
              longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
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
