import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {home,profile} from './screens/*';

const MainNavigator = createStackNavigator({
  home: {screen: home},
  profile: {screen: profile},
});

const App = createAppContainer(MainNavigator);

export default App;
