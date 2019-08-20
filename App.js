import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './style/_stylesheet';
import {CoinView} from './screens/coinview';
import {TopBar} from './components/topbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Show Me The Coin"></TopBar>
        <CoinView style={styles.InAppCoinView}></CoinView>
      </View>
    );
  }
}
