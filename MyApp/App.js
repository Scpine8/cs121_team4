/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
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

class App extends Component{
  
  //added for cards
  //TODO: check constructor and componentDidMount
  // constructor() = {
  //   super(){}
  //   this.state = {
  //     items:[]
  //   }
  // };
  // //added for cards
  // componentDidMount()={
  //   this._get('https://jsonplaceholder.typicode.com/posts').then(
  //     data => {
  //       this.ListeningStateChangedEvent({items:data})
  //     }
  //   )
  // };
  
  // //added for cards
  // //supposed to be within render
  // if(this.state.items.length==0){
  //   return(
  //     <View style={style.loader}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   )
  
  // }
  render(){
    return (
      <View>

        {/* part of cards tutorial */}
        {/* <FlatList
        style={styles.container}
        data={this.state.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Card item={item}/>}
      /> */}

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
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
              </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
              </Text>
              </View>
              <LearnMoreLinks />
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
