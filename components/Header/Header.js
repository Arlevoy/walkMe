import { backgroundColor, fontColor } from '../../constants';
import { Text } from 'react-native';
import React, { Component, Fragment } from 'react';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Text style={style.title}>WalkMe</Text>
      </Fragment>
    );
  }
}

const style = {
  title: {
    color: fontColor.white,
    backgroundColor: backgroundColor.lightGreen,
    boxShadow: '12px 3px -12px -3px rgba(0,0,0,0.5);',
    width: 20,
  },
};
