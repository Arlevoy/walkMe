import { Button } from '../../components';
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

    return <Button onPressAction={sendContactEmail} buttonTitle={'Contact Us'} />;
  }
}
