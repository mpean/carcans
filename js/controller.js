var appController = angular.module('appController', []);
var langue = 'fr';

appController.controller('appController', ['$scope', '$http',
                                                 function ($scope, $http, $rootScope) {                                                	
	
	// selection de la langue
	$scope.selectLangue = function(langue) { 	
		$scope.langue = langue;
	
		$http.get('json/'+$scope.langue+'.json').success(function (data) {
        	$scope.texte = data;
    	});

	};

	// positionnement de la langue par défaut
	if ($scope.langue == undefined) {
		$scope.selectLangue('fr');
	};
}]);