import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './View/StackNavigator';
import Chat from './View/TabNavigator';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Chat: { screen: Chat },
});

AppRegistry.registerComponent('ReactNavigation', () => SimpleApp);