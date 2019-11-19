import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import ActionScreen from "./screens/Action";
import React, { Component } from 'react';

// Way to Control Navigating Between Screens:

const AppContainer = createStackNavigator(
  {
  HomeScreen: {screen: HomeScreen}, // Set the HomeScreen to identifier 'HomeScreen'
  Action: {screen: ActionScreen}, // Set the ActionScreen to identifier 'Action'
  },
  {
    initialRouteName: 'HomeScreen', // Set default screen to 'HomeScreen'
  }
);
export default createAppContainer(AppContainer); // Export navigator in an app container to be accessed by other files
