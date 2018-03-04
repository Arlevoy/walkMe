import { color, fontFamily, fontSize } from '../../constants';
import { Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { onPressAction, buttonTitle } = this.props;
    return (
      <TouchableOpacity onPress={onPressAction}>
        <View style={style.footerContainer}>
          <Text style={style.title}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = {
  footerContainer: {
    backgroundColor: color.primary,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    color: color.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
  },
};
