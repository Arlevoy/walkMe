import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color, fontFamily, fontSize } from '../../constants';
import { Footer } from '../../components';
import React, { Component } from 'react';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'WalkMe',
    /* No more header config here! */
  };

  render() {
    const { data } = this.props;
    return !data.allTours ? (
      <ActivityIndicator size="large" color={color.lightGreen} />
    ) : (
      <View style={styles.container}>
        {data.allTours.map(({ name, description, image }) => (
          <TouchableOpacity
            key={name}
            style={styles.tourButton}
            onPress={() =>
              this.props.navigation.navigate('TourDetailsScreen', { name, description, image })
            }
          >
            <View>
              <Text style={styles.tourText}>{name.toUpperCase()}</Text>
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
    maxHeight: 100,
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
