import { color, fontFamily, fontSize } from '../../constants';
import { Footer, Header } from '../../components';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, Fragment } from 'react';

const tours = [
  { tourId: 'paris_1', tourName: 'Paris' },
  { tourId: 'rome_1', tourName: 'Rome' },
  { tourId: 'london_1', tourName: 'Londres' },
];

export default class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {tours.map(({ tourName, tourId }) => (
          <TouchableOpacity key={tourId} style={styles.tourButton}>
            <View>
              <Text style={styles.tourText}>{tourName}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Footer />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  tourButton: {
    flex: 1,
    margin: 35,
    backgroundColor: color.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    opacity: 0.8,
  },
  tourText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
    color: color.white,
  },
});
