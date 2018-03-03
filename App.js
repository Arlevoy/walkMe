import { color, fontFamily, fontSize } from './constants';
import { Font } from 'expo';
import { Footer, Header } from './components';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'work-sans': require('./assets/fonts/Work_Sans/WorkSans-Regular.ttf'),
      'work-sans-bold': require('./assets/fonts/Work_Sans/WorkSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container}>
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
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
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
