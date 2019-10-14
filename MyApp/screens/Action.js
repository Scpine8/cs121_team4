import React from 'react';
import { Button, View, Text } from 'react-native';
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