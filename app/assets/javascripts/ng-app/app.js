var app = angular.module('angular-rails', [
	'ui.router',
	'ngAnimate',
	'templates',
	'Devise'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'HomeCtrl'
		})
		.state('signin', {
			url: '/signin',
			templateUrl: 'signin.html',
			controller: 'SessionsCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'signup.html',
			controller: 'SessionsCtrl'
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
