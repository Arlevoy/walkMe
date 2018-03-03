import { color, fontFamily, fontSize } from '../../constants';
import { Footer, Header } from '../../components';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, Fragment } from 'react';

export default class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <TouchableOpacity style={styles.tourButton}>
          <View>
            <Text style={styles.tourText}>Paris</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tourButton}>
          <View>
            <Text style={styles.tourText}>Rome</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tourButton}>
          <View>
            <Text style={styles.tourText}>Londres</Text>
          </View>
        </TouchableOpacity>
        <Footer />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  tourButton: {
    flex: 1,
    margin: 35,
    backgroundColor: color.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    opacity: 0.8,
  },
  tourText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
    color: color.white,
  },
});
