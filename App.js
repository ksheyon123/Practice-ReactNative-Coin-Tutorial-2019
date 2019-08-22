import React from 'react';
<<<<<<< HEAD
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
=======
import { Text, View } from 'react-native';
import { styles } from './style/_stylesheet';
import { CoinView } from './screens/coinview';
import { TopBar } from './components/topbar';
// import { supportsOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { DetailsScreen } from './screens/detailsScreen';


// const detailStack = createStackNavigator(
//   {
//     Details: DetailsScreen
//   },
// )

// const AppContainer = createAppContainer(detailStack);

>>>>>>> 326348ccba44b2d2e5f1aa7bf69eddec14c1ad05

import Home from './screens/Home';
import Youtube from './screens/Youtube';

const Header = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>{props.title}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>{props.subtitle}</Text>
    </View>
  )
}
const MainStack = createStackNavigator ({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: (
          <Header
          title={'Show Me Coin'}
          subtitle={navigation.getParam('refreshDate', '-')}
          />
        ),
        headerStyle: {
          backgroundColor: 'pink',
        },
      }
    },
  },
  Youtube: {
    screen: Youtube,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'YOUTUBE'),
      }
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "pink"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

<<<<<<< HEAD
const AppContainer = createAppContainer(MainStack) 

const App = () => {
  return (
    <AppContainer />
  )
=======
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Coin List" refreshDate={this.state.refreshDate}></TopBar>
        <CoinView refreshDate={this._setRefreshDate} style={styles.InAppCoinView}></CoinView>
      </View>
    );
  }
>>>>>>> 326348ccba44b2d2e5f1aa7bf69eddec14c1ad05
}

export default App