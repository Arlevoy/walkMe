import { Header } from './components';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={{ color: 'blue' }}>Salut Jay et Lud, bienvenue sur WalkMe!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
