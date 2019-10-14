import React from 'react';
import { Button, View, Text } from 'react-native';
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Action"
                    onPress={() => this.props.navigation.navigate('Action')}
                />
            </View>
        );
    }
}

export default HomeScreen;