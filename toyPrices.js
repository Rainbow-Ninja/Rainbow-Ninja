function maximumToys(prices, k) {
    const sortedPrices = prices.sort(function(a, b) {return a-b});
    const pricesLen = sortedPrices.length;

    for(let i = 0; i < pricesLen; i++){
        k -= sortedPrices[i];
        if(k < 0) return  i;
    }
}