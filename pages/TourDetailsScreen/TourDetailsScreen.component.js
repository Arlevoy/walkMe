import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components';
import { color, fontFamily } from '../../constants';
import React, { Component } from 'react';

export default class TourDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return { title: `${params.name[0].toUpperCase()}${params.name.slice(1)} tour` };
  };

  render() {
    console.log(this.props);
    const { image, description } = this.props.navigation.state.params;
    return (
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
