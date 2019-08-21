export function getCoinIconUri(coinName) {
    switch(coinName) {
        case 'Bitcoin' :
            return 'https://cdn2.iconfinder.com/data/icons/cryptocurrency-5/100/cryptocurrency_blockchain_crypto-01-512.png'
        case 'Ethereum' :
            return 'https://cdn2.iconfinder.com/data/icons/cryptocurrency-vanilla-coins/90/Coin-BTC-Vanilla-3-512.png'
        case 'XRP' :
            return 'https://previews.123rf.com/images/rastudio/rastudio1710/rastudio171000083/87226510-bitcoin-coin-line-icon-cryptocurrency-bitcoin-symbol-isolated-on-white-background-linear-vector-icon.jpg'
        case 'Bitcoin Cash' :
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvp3h-iOsfxG2rsBBEYd6xY6s9tQKafHiHIcaEEsGoebpaUJZjPA'
        case 'Litecoin' :
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW564AhpYbw3s22ULfh6QSDA4u7M6bWWaoAvHgrBEe0U4TDBVEzQ'
        default :
            return 'https://static.thenounproject.com/png/34881-200.png'
    }
}