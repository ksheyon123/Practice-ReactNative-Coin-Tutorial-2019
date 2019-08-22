import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style/_stylesheet';
import { CoinView } from './coinview';
import { supportsOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    _setRefreshDate = (date) => {
        console.log('Updated: ' + date);
        if (this.props.navigation) {
            this.props.navigation.setParams({refreshDate: date});
        }
    }

    render() {
        return (
              <View style={styles.container}>
                <CoinView 
                navigation={this.props.navigation}
                refreshDate={this._setRefreshDate} 
                style={styles.InAppCoinView}></CoinView>
            </View>
        );
    }
}
