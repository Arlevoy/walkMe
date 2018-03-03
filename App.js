import { color } from './constants';
import { Font } from 'expo';
import { Homepage } from './pages';
import { StyleSheet, View } from 'react-native';
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
        <Homepage />
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
});
