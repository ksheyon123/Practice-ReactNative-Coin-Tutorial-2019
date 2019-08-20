import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../style/_stylesheet';
import {CoinItem} from '../components/coinitem';

class CoinView extends React.Component {
    render() {
        return (
            <View style={[styles.containerForCoinView, this.props.style]}>
                <CoinItem></CoinItem>
                <CoinItem></CoinItem>
                <CoinItem></CoinItem>
            </View>
        )
    }
}

module.exports = {
    CoinView
}