import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import ActionScreen from "./screens/Action";
import React, { Component } from 'react';

const AppContainer = createStackNavigator(
  {
  // HomeScreen: {
  //   screen: HomeScreen
  // },
  // Action: {
  //   screen: ActionScreen
  // },
  HomeScreen: {screen: HomeScreen},
  Action: {screen: ActionScreen},
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(AppContainer);
