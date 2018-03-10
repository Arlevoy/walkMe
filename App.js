import { ApolloProvider } from 'react-apollo';
import { color, fontFamily, fontSize, graphCoolEnpoint } from './constants';
import { Font } from 'expo';
import { HomeScreen, MapTourScreen, TourDetailsScreen } from './pages';
import { StackNavigator } from 'react-navigation';
import ApolloClient from 'apollo-boost';
import React from 'react';

const client = new ApolloClient({ uri: graphCoolEnpoint });

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    TourDetailsScreen: {
      screen: TourDetailsScreen,
    },
    MapTourScreen: {
      screen: MapTourScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { height: 50, marginTop: 0, backgroundColor: color.primary },
      headerBackTitleStyle: {
        color: color.white,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.veryLarge,
      },
      headerTitleStyle: {
        color: color.white,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.veryLarge,
      },
      headerBackTitle: 'TakeMeBack',
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
    return this.state.fontLoaded ? (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    ) : null;
  }
}
