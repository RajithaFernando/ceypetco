import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import AsyncStorage from '@react-native-community/async-storage';

import Landing from './src/components/Landing'
import Login from './src/components/Login'
import DetailsEnter from './src/components/DetailsEnter'
import Profile from './src/components/Profile'
import AddPhoto from './src/components/AddPhoto'

const MainNavigator = createStackNavigator({
  Landing:{screen:Landing},
  Profile:{screen:Profile},
  Login: {screen: Login},
  DetailsEnter: {screen: DetailsEnter},
});

const App = createAppContainer(MainNavigator);

export default App;
