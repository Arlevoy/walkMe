import { Font } from 'expo';
import { Footer, Header } from './components';
import { StyleSheet, Text, View } from 'react-native';
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
        <Text style={{ color: 'blue' }}>Salut Jay et Lud, bienvenue sur WalkMe!</Text>
        <Footer />
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
