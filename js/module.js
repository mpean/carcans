var appModule = angular.module('appModule', [
'ngRoute',
'ui.bootstrap',
'appController',
'ngSanitize'
]);

appModule.config(['$routeProvider',
                    function($routeProvider) {
	$routeProvider.
	when('/accueil', {
		templateUrl: 'accueil.html',
		controller: 'appController'
	}).
	when('/gourbet', {
		templateUrl: 'gourbet.html',
		controller: 'appController'
	}).
	when('/oyat', {
		templateUrl: 'oyat.html',
		controller: 'appController'
	}).
	when('/infos', {
		templateUrl: 'infos.html',
		controller: 'appController'
	}).
	when('/liens', {
		templateUrl: 'liens.html',
		controller: 'appController'
	}).
	when('/acces', {
		templateUrl: 'acces.html',
		controller: 'appController'
	}).
	when('/contact', {
		templateUrl: 'contact.html',
		controller: 'appController'
	}).
	when('/contact', {
		templateUrl: 'contact.html',
		controller: 'appController'
	}).
	otherwise({
		redirectTo: '/accueil'
	});
}]);