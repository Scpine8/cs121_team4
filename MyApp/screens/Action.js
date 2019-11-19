import React from 'react';
import { Button, View, Text } from 'react-native';
// import EmotionPlan from './models/emotionplan.js


/* The View is a dumb, presentational React.Component which means that it 
should be used only for displaying data and triggering events passed from 
the ViewController. This way, we’re keeping our components reusable and 
easy to test. With the help of MobX, we’ll turn React.Componentinto reactive 
component that will observe any changes and automatically update itself accordingly. */

class ActionScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Action Plan # 1: </Text>
                <Button
                    title="Go to Action... again"
                    onPress={() => this.props.navigation.push('ActionScreen')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default ActionScreen;