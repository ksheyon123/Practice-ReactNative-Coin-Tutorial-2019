import React from 'react';
import {View, Text, Button} from 'react-native';

class DetailsScreen extends React.Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                onPress={() => this.props.navigation.goBack()}
                title="Dismiss" />
            </View>
        )
    }
}

module.exports = {
    DetailsScreen
}