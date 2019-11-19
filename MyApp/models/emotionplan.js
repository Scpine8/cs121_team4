import React, { Component } from 'react'
import { StatusBar, AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

// Attempt to make a Model where HomeScreen and ActionScreen can use this for business logic
// this is a WIP!!!!!!!

class EmotionPlan extends Component {
    
    
    state = {
        'Emotion': '',
         ActionPlan: ''
    }

    constructor(props){
        super(props);
        this.state = {
          data: ''
        }
      }
}