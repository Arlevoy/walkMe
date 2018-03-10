import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components';
import { color, fontFamily } from '../../constants';
import React, { Component } from 'react';

export default class TourDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return { title: `${params.tourName} tour` };
  };

  findTourInfo = tourName => {
    const tours = this.props.data.allTours;
    console.log(tours);
    return tours && tours.find(({ name }) => name === tourName);
  };

  render() {
    console.log(this.props);
    const { tourName } = this.props.navigation.state.params;
    console.log(this.findTourInfo(tourName));
    const { description, image } = this.findTourInfo(tourName) || {};
    return !this.findTourInfo(tourName) ? (
      <ActivityIndicator size="large" color={color.lightGreen} />
    ) : (
      <View style={styles.container}>
        <View style={styles.shortDescriptionContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
          <Text style={styles.shortDescriptionText}>Petite description</Text>
        </View>
        <View style={styles.fullDescriptionContainer}>
          <Text>{description}</Text>
        </View>
        <Button
          onPressAction={() => this.props.navigation.navigate('MapTourScreen')}
          buttonTitle={'WalkMe!'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  fullDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  shortDescriptionContainer: {
    flex: 1,
    marginTop: 20,
    marginRight: 15,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 130,
    width: 130,
    resizeMode: Image.resizeMode.contain,
  },
  shortDescriptionText: {
    flex: 1,
    fontFamily: fontFamily.regular,
  },
});
