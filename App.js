import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style/_stylesheet';
import { CoinView } from './screens/coinview';
import { TopBar } from './components/topbar';
import { supportsOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshData: '-',
    }
  }

  _setRefreshDate = (date) => {
    console.log('Updated: ' + date);
    this.setState({
      refreshDate: date,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Coin List" refreshDate ={this.state.refreshDate}></TopBar>
        <CoinView sayHello={(text) => { console.log(text) }} refreshDate={this._setRefreshDate} style={styles.InAppCoinView}></CoinView>
      </View>
    );
  }
}
