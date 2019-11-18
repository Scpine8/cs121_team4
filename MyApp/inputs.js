import React, { Component } from 'react'
import { StatusBar, AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
    'Emotion': '',
     ActionPlan: ''
   }

   emotionDidMount = () => AsyncStorage.getItem('Emotion').then((value) => this.setState({ 'Emotion': value }))

   setEmotion = (value) => {
    AsyncStorage.setItem('Emotion', value);
    this.setState({ 'Emotion': value });
 }

   handleEmail = (text) => {
    AsyncStorage.setItem(Emotion, text);
      this.setState({ Emotion: text })
   }
   handlePassword = (text) => {
      this.setState({ ActionPlan: text })
   }
   login = (Emotion, ActionPlan) => {
      alert('Emotion: ' + Emotion + ' ActionPlan: ' + ActionPlan)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Emotion"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.setName}/>
               <Text>
               {this.state.name}
            </Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "ActionPlan"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.props.navigation.navigate('HomeScreen')      
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 5
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})