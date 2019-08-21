import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../style/_stylesheet';

class TopBar extends React.Component {
    
    render() {
        return (
            <View style={styles.containerForTopBar}>
                <Text>Left</Text>
                <View>
                <Text style={{fontSize: 20, textAlign:'center'}}>{this.props.title || 'TITLE'}</Text>
                <Text style={{fontSize:10, textAlign:'center'}}>{this.props.refreshDate || '-'}</Text>
                </View>
                <Text>Right</Text>
            </View>
        );
    }
}

module.exports = {
    TopBar
}