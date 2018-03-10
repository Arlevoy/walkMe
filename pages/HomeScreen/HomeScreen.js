import { color, fontFamily, fontSize } from '../../constants';
import { Footer } from '../../components';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

const tours = [{ tourName: 'gambetta' }, { tourName: 'rome_1' }, { tourName: 'london_1' }];

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'WalkMe',
    /* No more header config here! */
  };
  render() {
    return (
      <View style={styles.container}>
        {tours.map(({ tourName, tourId }) => (
          <TouchableOpacity
            key={tourName}
            style={styles.tourButton}
            onPress={() =>
              this.props.navigation.navigate('TourDetailsScreen', { tourId, tourName })
            }
          >
            <View>
              <Text style={styles.tourText}>{tourName.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  tourButton: {
    flex: 1,
    margin: 35,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    shadowOffset: { width: 1, height: 2 },
    opacity: 0.7,
  },
  tourText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
    color: color.primary,
  },
});
