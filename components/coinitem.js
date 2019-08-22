import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { styles } from '../style/_stylesheet';
import { black } from 'ansi-colors';

class CoinItem extends React.Component {
    render() {
        return (
            <View style={styles ?.containerForCoinItem}>
                <Image
                    style={{ width: 50, height: 50, marginRight: 20, marginLeft: 10 }}
                    source={{ uri: this.props.iconUri }} />
                <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent:'space-between', flex:1 }}>
                    <View>
                        <Text style={[styles ?.textForCoinItem, { flex: 1, fontSize: 20, color: 'black', marginTop:5}]}>
                            {this.props.name || 'Name'}
                        </Text>
                        <Text style={[styles ?.textForCoinItem, { flex: 1, color:'darkgrey' }]}>
                            {'Volume: ' + (this.props.volume || 0)}
                        </Text>
                        <Text style={[styles ?.textForCoinItem, { flex: 1, color: 'black' }]}>
                            {'Price: ' + (this.props.price || 0)}
                        </Text>
                    </View>
                    <Text style={[styles ?.textForCoinItem, {fontSize:20, color:'black' }]}>
                        {'#' + (this.props.rank || 'Rank')}
                    </Text>
                </View>
            </View>
        )
    }
}

module.exports = {
    CoinItem
}