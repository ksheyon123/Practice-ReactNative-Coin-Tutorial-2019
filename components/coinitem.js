import React from 'react';
import { Text, View} from 'react-native';
import {styles} from '../style/_stylesheet';

class CoinItem extends React.Component {
    render() {
        let date = new Date();
        let noew = date.toLocaleString();

        return (
            <View style={styles.containerForCoinItem}>
                <Text style={[styles.text, {flex: 1}]}>
                    {this.props.name || 'Name'}
                </Text>
                <Text style={[styles.text, {flex: 1}]}>
                    {'Volume: ' + (this.props.volume || 0)}
                </Text>
                <Text style={[styles.text, {flex: 1}]}>
                    {'Price: ' + (this.props.price || 0)}
                </Text>
                <Text style={[styles.text, {flex: 1}]}>
                    {'#' + (this.props.rank || 'Rank')}
                </Text>
            </View>
        )
    }
}

module.exports = {
    CoinItem
}