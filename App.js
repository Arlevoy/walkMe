import { color, fontFamily, fontSize } from './constants';
import { Font } from 'expo';
import { Homepage } from './pages';
import { StackNavigator } from 'react-navigation';
import React from 'react';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Homepage,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { height: 50, marginTop: 0, backgroundColor: color.lightGreen },
      headerTitleStyle: {
        color: color.white,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.veryLarge,
      },
    },
  }
);
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
    return this.state.fontLoaded ? <RootStack /> : null;
  }
}
