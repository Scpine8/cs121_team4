/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Inputs from './inputs.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// read about this
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { tsConstructorType } from '@babel/types';


// const App = () => {
//   return (
//      <Inputs />
//   )
// }

class App extends Component{
  render(){
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <Header /> 
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Add your current <Text style={styles.highlight}> Emotions and Action Plan</Text>
                </Text>
              </View>
              <Inputs />
              {/* <LearnMoreLinks /> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}


//TODO: finish
// _get = async (endpoint) => {
//   const res = await fetch(endpoint);
//   const data = await res.json();
//   return data;
// }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
   //added for cards
  // loader:{
  //   flex:1,
  //   alignItems:'center',
  //   justifyContent:'center'
  // }
});

export default App;
