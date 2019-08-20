import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../style/_stylesheet';

class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.containerForTopBar}>
                <Text>Left</Text>
                <Text>{this.props.title || 'TITLE'}</Text>
                <Text>Right</Text>
            </View>
        );
    }
}

module.exports = {
    TopBar
}