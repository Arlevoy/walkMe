import { Button } from '../../components';
import { color, fontFamily, tourUrl } from '../../constants';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class TourDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return { title: `${params.tourName} tour` };
  };

  openTourMap = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  render() {
    const { tourName, tourId } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.shortDescriptionContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/imageParisOne.jpeg')}
            />
          </View>
          <Text
            style={styles.shortDescriptionText}
          >{`Short description for ${tourName} tour`}</Text>
        </View>
        <View style={styles.fullDescriptionContainer}>
          <Text>{tourName}</Text>
        </View>
        <Button onPressAction={() => this.openTourMap(tourUrl[tourId])} buttonTitle={'WalkMe!'} />
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
  fullDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 120,
    width: 120,
  },
  shortDescriptionText: {
    flex: 1,
    fontFamily: fontFamily.regular,
  },
});
