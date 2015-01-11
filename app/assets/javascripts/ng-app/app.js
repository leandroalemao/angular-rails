var app = angular.module('angular-rails', [
	'ui.router',
	'ngAnimate',
	'templates'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'HomeCtrl'
		})
		// abstract parent state
		.state('dashboard', {
			abstract: true,
			url: '/dashboard',
			templateUrl: 'dashboard/layout.html'
		})
		// default when someone hits the dashboard
		.state('dashboard.one', {
			url: '',
			templateUrl: 'dashboard/one.html'
		})
		.state('dashboard.two', {
			url: '/two',
			templateUrl: 'dashboard/two.html'
		})
		.state('dashboard.three', {
			url: '/three',
			templateUrl: 'dashboard/three.html'
		})

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
});
