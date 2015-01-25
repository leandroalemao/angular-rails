app.factory('BitcoinPrice', ['$http', function($http){

  function BitcoinPrice(data){
    for(attr in data){
      this[attr] = data[attr];
    }
  }

  BitcoinPrice.query = function(){
    //https://api.coinbase.com/v1/prices/spot_rate?currency=GBP
    //https://api.coindesk.com/v1/bpi/currentprice.json
    return $http.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(function(result){
      var bitcoinprices = [];
      bitcoinprices.push(new BitcoinPrice(result.data.bpi))
      return bitcoinprices;
    });
  }

  return BitcoinPrice;
}]);
