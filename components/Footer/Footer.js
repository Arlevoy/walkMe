import { color, fontFamily, fontSize } from '../../constants';
import { Text, TouchableOpacity, View } from 'react-native';
import Communications from 'react-native-communications';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const sendContactEmail = () =>
      Communications.email(
        ['contact.walkme@gmail.com'],
        ['jason.derancourt@gmail.com', 'arthur.levoyer@gmail.com'],
        null,
        'Salut toi',
        'Je vous contacte à propos de ...'
      );

    return (
      <TouchableOpacity onPress={sendContactEmail}>
        <View style={style.footerContainer}>
          <Text style={style.title}>Contact Us</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = {
  footerContainer: {
    backgroundColor: color.lightGreen,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    color: color.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
  },
};
