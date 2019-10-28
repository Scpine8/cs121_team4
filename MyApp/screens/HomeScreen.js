import React, {Component} from 'react';
import {
    StyleSheet, 
    TouchableOpacity, 
    Button, 
    View, 
    Text, 
    Image, 
    ActivityIndicator, 
    FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import Card from '/components/cards/Card';  //added for cards

class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{url:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwid8oTY757lAhWtIDQIHeqfDz0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.petmd.com%2Fdog%2Fnutrition%2Fhow-help-puppy-who-isnt-gaining-weight&psig=AOvVaw2QnNSPalc7uEuE-ocryQtP&ust=1571249772073109'}}/>
                    <Text style={styles.cardText}>Card Title</Text>
                </TouchableOpacity> */}
                <Button
                    title="Go to Action"
                    onPress={() => this.props.navigation.navigate('Action')}
                />
            </View>

            // test 
            // <Card
            //     title='HELLO WORLD'
            //     image={require('../images/pic2.jpg')}>
            //     <Text style={{marginBottom: 10}}>
            //         The idea with React Native Elements is more about component structure than actual design.
            //     </Text>
            //     <Button
            //         icon={<Icon name='code' color='#ffffff' />}
            //         buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            //         title='VIEW NOW' />
            // </Card>
        );
    }
}

//create StyleSheet
const styles = StyleSheet.create( {
    container: {
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },

    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 0,
        shadowOffset: {
            width: 3,
            height: 3,
        }
    
    
    },
    cardImage: {
        width:'100%',
        height:200,
        resizeMode:'cover'
    },
    cardText:{
        padding:10,
        fontSize:16
    }
})


export default HomeScreen;