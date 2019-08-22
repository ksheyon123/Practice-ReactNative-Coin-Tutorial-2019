import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { styles } from '../style/_stylesheet';
import { CoinItem } from '../components/coinitem';
import { sampledata } from '../sampledata/sampledata';
import {getCoinIconUri} from '../libs/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

// `https://gist.githubusercontent.com/JeffGuKang/2ccbe7ee81c88d836fa39fc019b374a9/raw/998876fa052f48422390fd02709c9ec75e97833f/gistfile1.txt`
class CoinView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coinDatas: [],
            isLoading: false,
        };
    }
    componentDidMount() {
        this._getCoinDatas(10);
        // setInterval(() => { 
        //     this._getCoinDatas(10);
        //     console.log('toggled!');
        // }, 20000);
    }

    _getCoinDatas = async (limit) => {
        await this.setState({
            isLoading: true,
        });
        //try catch -> 중간에 err가 발생할 경우 비동기는 파악하기 어려움, 따라서 try안에 비동기가 돌아가게 하고 catch로 err 색인
        try {
            const response = await fetch(`https://gist.githubusercontent.com/JeffGuKang/2ccbe7ee81c88d836fa39fc019b374a9/raw/998876fa052f48422390fd02709c9ec75e97833f/gistfile1.txt`);
            const responseJson = await response.json();

            const date = new Date();
            const now = date.toLocaleString();

            if(this.props.refreshDate != null) {
                this.props.refreshDate(now); //Run function type props
            }

            await this.setState({
                coinDatas: responseJson,
                isLoading: false,
            });

        } catch (error) {
            console.error('_getCoinDatas', error);
        }
    }

    _renderItem = ({item}) => {
        const {rank, name, price_usd, market_cap_usd, time, id} = item;
        return (
            <TouchableOpacity
            onPress={() => this.props.navigation && this.props.navigation.push('Youtube', {title: name})}>
            <CoinItem
            rank={rank}
            name={name}
            price={price_usd}
            volume={market_cap_usd}
            iconUri={getCoinIconUri(name)}
            />
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <FlatList 
            data={this.state.coinDatas} // coinDatas 배열 data load
            keyExtractor={(item) => item.name} // Key를 지정
            renderItem={this._renderItem}
            refreshing={this.state.isLoading}
            onRefresh={this._getCoinDatas}
            />
             //Scroll View 에서 아래 길이를 모르기 때문에 justifyContent, alignItem 불가
        )
    }
}


module.exports = {
    CoinView
}