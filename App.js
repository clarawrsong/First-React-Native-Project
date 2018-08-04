import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import TodoScreen from './components/TodoScreen';

export default class App extends Component {
  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Todo: TodoScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

