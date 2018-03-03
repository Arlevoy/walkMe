import { color, fontFamily, fontSize } from '../../constants';
import { Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <View style={style.headerContainer}>
        <Text style={style.title}>WalkMe</Text>
      </View>
    );
  }
}

const style = {
  headerContainer: {
    backgroundColor: color.lightGreen,
    alignItems: 'center',
    padding: 30,
    marginBottom: 20,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  title: {
    color: color.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.veryLarge,
  },
};
