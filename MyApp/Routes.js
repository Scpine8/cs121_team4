import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import ActionScreen from "./screens/Action";
const Project= createStackNavigator({
  HomeScreen: {
   screen: HomeScreen
  },
  Action: {
   screen: ActionScreen
  }
});
export default createAppContainer(Project);