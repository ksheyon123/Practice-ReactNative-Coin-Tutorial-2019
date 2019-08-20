import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#C2185B',
        height: Constants.statusBarHeight
    },
    container: {
        flex: 1
    },
    containerForTopBar : {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    containerForCoinView : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    InAppCoinView: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    containerForCoinItem: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5
    },
    textForCoinItem: {
        color: 'white'
    }
});

module.exports = {
    styles
}