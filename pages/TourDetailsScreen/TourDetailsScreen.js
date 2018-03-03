import { color } from '../../constants';
import { Footer } from '../../components';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class TourDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return { title: `${params.tourName} tour` };
  };
  render() {
    const { tourName, tourId } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{tourName}</Text>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
