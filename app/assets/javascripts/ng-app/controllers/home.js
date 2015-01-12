app.controller('HomeCtrl', function($scope, $interval, BitcoinPrice){

	$interval(function(){
		$scope.fillBitcoinPrices();
	}, 6000);

	$scope.fillBitcoinPrices = function(){
		BitcoinPrice.query().then(function(bitcoin_prices){
			$scope.bitcoin_prices = bitcoin_prices;
		});
	};
	$scope.fillBitcoinPrices();

})
