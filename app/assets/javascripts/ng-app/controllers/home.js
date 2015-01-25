app.controller('HomeCtrl', function($scope, $interval, BitcoinPrice, Auth){

	$scope.fillBitcoinPrices = function(){
		BitcoinPrice.query().then(function(bitcoin_prices){
			$scope.bitcoin_prices = bitcoin_prices;
		});
	};

	$interval(function(){
		if($scope.isLoggedIn){
			$scope.fillBitcoinPrices();
		}
	}, 10000000);

	$scope.$on('devise:login', function(event, currentUser) {
		$scope.isLoggedIn = Auth.isAuthenticated();
		$scope.fillBitcoinPrices();
	});

	$scope.$on('devise:new-session', function(event, currentUser) {
		$scope.isLoggedIn = Auth.isAuthenticated();
		$scope.fillBitcoinPrices();
	});

	$scope.$on('devise:logout', function(event, oldCurrentUser) {
		$scope.isLoggedIn = Auth.isAuthenticated();
		$scope.bitcoin_prices = [];
	});

});
